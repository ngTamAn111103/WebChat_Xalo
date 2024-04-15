import React from "react";

export function Footer({ label, href = "#" }) {
  return (
    <div className="mt-10 text-center">
      <p className="mb-4">
        Don't have an account ?
        <a className="text-primary font-normal" href={href}>
          {label}
        </a>
      </p>
      <p>
        © 2024 Chatvia. Crafted with{" "}
        <i className="fa-solid fa-heart text-red-500"></i> by Themesbrand
      </p>
    </div>
  );
}
