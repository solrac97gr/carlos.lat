import { useEffect, useRef, useState, useCallback } from "react";
import mermaid from "mermaid";
import {
  Container,
  ToolBar,
  ToolButton,
  DiagramContainer,
  DiagramWrapper,
  ZoomControls,
  ZoomButton,
  ZoomLevel,
  ErrorMessage,
} from "./index.styles";

export const MermaidDiagram = ({ code }) => {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ x: 0, y: 0 });
  const [diagramId] = useState(`mermaid-${Math.random().toString(36).substr(2, 9)}`);
  const [showZoomControls, setShowZoomControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hideControlsTimeoutRef = useRef(null);

  const renderDiagram = useCallback(async () => {
    if (!containerRef.current || !code) return;

    try {
      setError(null);

      // Clear previous diagram
      containerRef.current.innerHTML = "";

      // Render new diagram
      const { svg } = await mermaid.render(diagramId, code);
      containerRef.current.innerHTML = svg;
    } catch (err) {
      setError(err.message || "Invalid Mermaid syntax");
      console.error("Mermaid rendering error:", err);
    }
  }, [code, diagramId]);

  useEffect(() => {
    // Detect if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Initialize mermaid with configuration
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    });

    renderDiagram();
  }, [renderDiagram]);

  const toggleZoomControls = () => {
    if (isMobile) {
      setShowZoomControls(true);

      // Auto-hide after 3 seconds
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }

      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowZoomControls(false);
      }, 3000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownloadSVG = () => {
    const svgElement = containerRef.current?.querySelector("svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `diagram-${Date.now()}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  const handleDownloadPNG = () => {
    const svgElement = containerRef.current?.querySelector("svg");
    if (!svgElement) return;

    try {
      // Clone the SVG to avoid modifying the original
      const clonedSvg = svgElement.cloneNode(true);

      // Get SVG dimensions
      const bbox = svgElement.getBBox();
      const padding = 40;
      const width = bbox.width + padding;
      const height = bbox.height + padding;

      // Set explicit dimensions on cloned SVG
      clonedSvg.setAttribute('width', width);
      clonedSvg.setAttribute('height', height);
      clonedSvg.setAttribute('viewBox', `${bbox.x - padding/2} ${bbox.y - padding/2} ${width} ${height}`);

      // Serialize SVG to string
      const svgString = new XMLSerializer().serializeToString(clonedSvg);

      // Create a data URL (avoids CORS issues)
      const svgDataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));

      // Create canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;

      // Fill white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // Load and draw image
      const img = new Image();
      img.onload = () => {
        try {
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to blob and download
          canvas.toBlob((blob) => {
            if (blob) {
              const pngUrl = URL.createObjectURL(blob);
              const downloadLink = document.createElement("a");
              downloadLink.href = pngUrl;
              downloadLink.download = `diagram-${Date.now()}.png`;
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
              URL.revokeObjectURL(pngUrl);
            }
          }, 'image/png');
        } catch (error) {
          console.error("Error converting to PNG:", error);
          alert("Failed to export PNG. Please try downloading as SVG instead.");
        }
      };

      img.onerror = () => {
        console.error("Error loading SVG image");
        alert("Failed to export PNG. Please try downloading as SVG instead.");
      };

      img.src = svgDataUrl;
    } catch (error) {
      console.error("Error exporting PNG:", error);
      alert("Failed to export PNG. Please try downloading as SVG instead.");
    }
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setScale(1);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    const diagramContainer = e.currentTarget;
    setScrollStart({
      x: diagramContainer.scrollLeft,
      y: diagramContainer.scrollTop,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diagramContainer = e.currentTarget;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    diagramContainer.scrollLeft = scrollStart.x - dx;
    diagramContainer.scrollTop = scrollStart.y - dy;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    toggleZoomControls(); // Show zoom controls on touch

    if (e.touches.length !== 1) return; // Only single touch
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
    const diagramContainer = e.currentTarget;
    setScrollStart({
      x: diagramContainer.scrollLeft,
      y: diagramContainer.scrollTop,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;

    const touch = e.touches[0];
    const diagramContainer = e.currentTarget;
    const dx = touch.clientX - dragStart.x;
    const dy = touch.clientY - dragStart.y;

    diagramContainer.scrollLeft = scrollStart.x - dx;
    diagramContainer.scrollTop = scrollStart.y - dy;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDiagramClick = (e) => {
    // Only toggle on mobile and if not clicking a zoom control button
    if (isMobile && !e.target.closest('button')) {
      toggleZoomControls();
    }
  };

  if (error) {
    return (
      <Container>
        <ErrorMessage>
          <strong>Mermaid Diagram Error:</strong>
          {"\n\n"}
          {error}
          {"\n\n"}
          <strong>Code:</strong>
          {"\n"}
          {code}
        </ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <ToolBar>
        <ToolButton onClick={handleCopy} title="Copy diagram code">
          📋 Copy
        </ToolButton>
        <ToolButton onClick={handleDownloadSVG} title="Download as SVG">
          ⬇️ SVG
        </ToolButton>
        <ToolButton onClick={handleDownloadPNG} title="Download as PNG">
          ⬇️ PNG
        </ToolButton>
      </ToolBar>

      <DiagramContainer
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleDiagramClick}
        $isDragging={isDragging}
      >
        <DiagramWrapper $scale={scale} ref={containerRef} />

        {(!isMobile || showZoomControls) && (
          <ZoomControls>
            <ZoomButton onClick={handleZoomOut} disabled={scale <= 0.5} title="Zoom out">
              −
            </ZoomButton>
            <ZoomLevel>{Math.round(scale * 100)}%</ZoomLevel>
            <ZoomButton onClick={handleZoomIn} disabled={scale >= 3} title="Zoom in">
              +
            </ZoomButton>
            <ZoomButton onClick={handleZoomReset} title="Reset zoom">
              ⟲
            </ZoomButton>
          </ZoomControls>
        )}
      </DiagramContainer>
    </Container>
  );
};
