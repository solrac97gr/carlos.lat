# MermaidDiagram Component

A full-featured Mermaid diagram component for MDX blog posts with zoom, pan, and export capabilities.

## Features

- ✅ Renders Mermaid diagrams from code
- ✅ Copy diagram code to clipboard
- ✅ Download as SVG
- ✅ Download as PNG
- ✅ Zoom in/out controls (50% - 300%)
- ✅ Pan/drag functionality (click and drag)
- ✅ Error handling with detailed messages
- ✅ Responsive design

## Usage in MDX Files

```jsx
<MermaidDiagram code={`
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[End]
`}/>
```

## Diagram Types

### Flowchart
```jsx
<MermaidDiagram code={`
flowchart LR
    A[Square] --> B[Circle]
    B --> C[Triangle]
`}/>
```

### Sequence Diagram
```jsx
<MermaidDiagram code={`
sequenceDiagram
    participant User
    participant API
    participant Database

    User->>API: Request data
    API->>Database: Query
    Database-->>API: Results
    API-->>User: Response
`}/>
```

### Class Diagram
```jsx
<MermaidDiagram code={`
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +bark()
    }
    Animal <|-- Dog
`}/>
```

### State Diagram
```jsx
<MermaidDiagram code={`
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: Start
    Processing --> Success: Complete
    Processing --> Failed: Error
    Success --> [*]
    Failed --> Idle: Retry
`}/>
```

### ER Diagram
```jsx
<MermaidDiagram code={`
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER {
        string name
        string email
    }
    ORDER {
        int orderNumber
        date orderDate
    }
`}/>
```

### Git Graph
```jsx
<MermaidDiagram code={`
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
`}/>
```

## Controls

- **📋 Copy**: Copy the Mermaid code to clipboard
- **⬇️ SVG**: Download diagram as SVG (vector format, infinite scaling)
- **⬇️ PNG**: Download diagram as PNG (raster format, white background)
- **+ / −**: Zoom in/out (50% to 300%)
- **⟲**: Reset zoom to 100%
- **Click & Drag**: Pan around large diagrams

## Error Handling

If your Mermaid syntax is invalid, you'll see a detailed error message:

```
Mermaid Diagram Error:

[Error details]

Code:
[Your Mermaid code]
```

## Tips

1. **Large diagrams**: Use zoom controls and drag to navigate
2. **Export quality**: Use SVG for best quality and infinite scaling
3. **Sharing**: PNG exports have white backgrounds for better compatibility
4. **Testing**: Use [Mermaid Live Editor](https://mermaid.live/) to test syntax before adding to your blog

## Examples for Go/Rust Blog Posts

### Go Concurrency Pattern
```jsx
<MermaidDiagram code={`
flowchart TB
    Start[Start] --> CreateCh[Create Channel]
    CreateCh --> SpawnG1[Spawn Goroutine 1]
    CreateCh --> SpawnG2[Spawn Goroutine 2]
    SpawnG1 --> SendData1[Send Data]
    SpawnG2 --> SendData2[Send Data]
    SendData1 --> MainRecv[Main Receives]
    SendData2 --> MainRecv
    MainRecv --> Process[Process Data]
    Process --> End[End]
`}/>
```

### Rust Ownership Model
```jsx
<MermaidDiagram code={`
graph TD
    Owner[Owner] -->|owns| Value[Value]
    Owner -->|can borrow| Borrow1[&T Immutable]
    Owner -->|can borrow| Borrow2[&mut T Mutable]
    Borrow1 -.->|reads| Value
    Borrow2 -.->|reads/writes| Value

    style Owner fill:#f9a825
    style Value fill:#4caf50
    style Borrow1 fill:#2196f3
    style Borrow2 fill:#e91e63
`}/>
```

## Styling

The component uses a clean, minimal design with:
- White background
- Light gray borders
- Hover effects on buttons
- Smooth transitions
- Responsive scrollbars

Diagrams use Mermaid's default theme which works well with light backgrounds.
