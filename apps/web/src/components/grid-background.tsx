import React from "react";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e799_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e799_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#26262699_1px,transparent_1px),linear-gradient(to_bottom,#26262699_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
