type MeasurementSketchProps = {
  variant:
    | "bust"
    | "bra"
    | "underBust"
    | "waist"
    | "tight"
    | "belly"
    | "hips"
    | "vertical"
    | "notes";
};

function AccentShape({ variant }: { variant: MeasurementSketchProps["variant"] }) {
  const common = {
    fill: "none",
    stroke: "var(--rose-deep)",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (variant) {
    case "bust":
      return <path {...common} d="M56 66C76 56 144 56 164 66" />;
    case "bra":
      return (
        <>
          <path {...common} d="M75 78C79 58 97 54 110 72" />
          <path {...common} d="M145 78C141 58 123 54 110 72" />
        </>
      );
    case "underBust":
      return <path {...common} d="M56 84C83 88 137 88 164 84" />;
    case "waist":
      return <path {...common} d="M62 108C84 104 136 104 158 108" />;
    case "tight":
      return (
        <>
          <path {...common} d="M62 108C84 104 136 104 158 108" />
          <path {...common} d="M38 108H58" />
          <path {...common} d="M48 101L58 108L48 115" />
          <path {...common} d="M182 108H162" />
          <path {...common} d="M172 101L162 108L172 115" />
        </>
      );
    case "belly":
      return <path {...common} d="M60 124C82 121 138 121 160 124" />;
    case "hips":
      return <path {...common} d="M50 142C78 148 142 148 170 142" />;
    case "vertical":
      return (
        <>
          <path {...common} d="M110 84V108" />
          <path {...common} d="M104 90L110 84L116 90" />
          <path {...common} d="M104 102L110 108L116 102" />
        </>
      );
    case "notes":
      return (
        <>
          <path {...common} d="M66 70H154" />
          <path {...common} d="M66 92H154" />
          <path {...common} d="M66 114H132" />
          <path {...common} d="M144 126L154 136" />
          <circle cx="160" cy="142" r="10" fill="none" stroke="var(--rose-deep)" strokeWidth="3" />
        </>
      );
  }
}

export function MeasurementSketch({ variant }: MeasurementSketchProps) {
  return (
    <div className="measurement-sketch" aria-hidden="true">
      <svg viewBox="0 0 220 180" role="presentation">
        <rect x="0" y="0" width="220" height="180" rx="18" fill="rgba(255,255,255,0.72)" />

        <path
          d="M76 36C80 26 95 22 110 22C125 22 140 26 144 36L156 62C162 74 162 95 150 110L143 119C138 125 136 133 136 144V152H84V144C84 133 82 125 77 119L70 110C58 95 58 74 64 62L76 36Z"
          fill="rgba(234, 215, 202, 0.36)"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        <path d="M96 34L92 152" fill="none" stroke="rgba(32,24,26,0.42)" strokeWidth="1.4" />
        <path d="M110 28V152" fill="none" stroke="rgba(32,24,26,0.42)" strokeWidth="1.4" />
        <path d="M124 34L128 152" fill="none" stroke="rgba(32,24,26,0.42)" strokeWidth="1.4" />

        <AccentShape variant={variant} />
      </svg>
    </div>
  );
}
