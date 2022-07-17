import Link from "next/link";
import { useRouter } from "next/router";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect, useCallback } from "react";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "21px",
    height: "21px",
    left: "21px",
    top: "21px",
  },
  bmBurgerBars: {
    background: "#63f3ab",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    display: "flex",
    flexDirection: "column",
    background: "#2D2E32",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#2D2E32",
  },
  bmItemList: {
    color: "#63f3ab",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const marginItems = 20;

export const BurgerMenu = () => {
  const router = useRouter();

  return (
    <Menu styles={styles}>
      <Link href="/">
        <a
          className={router.pathname == "/" ? "isActive" : ""}
          style={{ marginBottom: marginItems }}
        >
          {router.pathname === "/" ? "<Inicio>" : "Inicio"}
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={router.pathname.includes("/blog") ? "isActive" : ""}
          style={{ marginBottom: marginItems }}
        >
          {router.pathname.includes("/blog") ? "<Blog>" : "Blog"}
        </a>
      </Link>

      <Link href="/sobre-mi">
        <a
          className={router.pathname.includes("/sobre-mi") ? "isActive" : ""}
          style={{ marginBottom: marginItems }}
        >
          {router.pathname.includes("/sobre-mi") ? "<Sobre mi>" : "Sobre mi"}
        </a>
      </Link>
    </Menu>
  );
};
