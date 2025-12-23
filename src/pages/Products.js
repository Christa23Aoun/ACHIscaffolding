import React, { useEffect, useMemo } from "react"

const Products = () => {
  useEffect(() => {
    if (!document.querySelector('script[data-model-viewer="true"]')) {
      const s = document.createElement("script")
      s.type = "module"
      s.async = true
      s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      s.setAttribute("data-model-viewer", "true")
      document.body.appendChild(s)
    }
  }, [])

  const products = useMemo(
    () => [
      {
        type: "3d",
        title: "Double Coupler 3D Component",
        desc: "High-strength double coupler for connecting scaffold tubes at 90° with precise alignment.",
        model: "/assets/products/double_coupler.glb",
        badge: "3D VIEW",
        specs: [
          "3D interactive model",
          "Ideal for tube and fitting systems",
          "Optimized for heavy-duty connections",
        ],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "H Frame 3D Component",
        desc: "3D visualization of H frame scaffolding for façade and elevation works.",
        model: "/assets/products/h_frame.glb",
        badge: "3D VIEW",
        specs: [
          "Quick-assembly frame geometry",
          "Stable vertical support",
          "Compatible with standard accessories",
        ],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Joint Coupler 3D Component",
        desc: "3D model of the joint coupler used to connect scaffold tubes end-to-end.",
        model: "/assets/products/joint_coupler.glb",
        badge: "3D VIEW",
        specs: [
          "End-to-end tube connection",
          "Rigid alignment in elevation",
          "Ideal for extending ledgers and standards",
        ],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Half Coupler 3D Component",
        desc: "3D visualization of half coupler used for connecting scaffold tubes to accessories.",
        model: "/assets/products/half_coupler.glb",
        badge: "3D VIEW",
        specs: [
          "Single jaw connection",
          "For beams, brackets and specials",
          "High tightening capacity",
        ],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Swivel Coupler 3D Component",
        desc: "3D model of swivel coupler for connecting tubes at variable angles.",
        model: "/assets/products/swivel_coupler.glb",
        badge: "3D VIEW",
        specs: ["Flexible angle connections", "Perfect for bracing and ties", "High-strength forged body"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },

      {
        type: "img",
        title: "Standard Frame Scaffolding",
        desc: "Modular steel frames for construction and maintenance work.",
        img: "/assets/products/Standard_Frame_Scaffolding.jpg",
        specs: ["Height per bay: up to 6 m", "Load class: up to 3", "Finish: painted / galvanized"],
      },
      {
        type: "img",
        title: "Ringlock System Scaffolding",
        desc: "Heavy-duty system scaffolding for high-rise structures.",
        img: "/assets/products/Ringlock_System_Scaffolding.png",
        specs: ["High load capacity", "Flexible geometry", "Ideal for multi-storey projects"],
      },
      {
        type: "img",
        title: "Suspended Scaffolding Platforms",
        desc: "Motorized and manual swing stages for façade works.",
        img: "/assets/products/Suspended_Scaffolding_Platforms.jpg",
        specs: ["Adjustable height", "Excellent for façades", "Safety guardrails included"],
      },
      {
        type: "img",
        title: "Adjustable Base Jacks",
        desc: "Precise leveling for uneven or sloped surfaces.",
        img: "/assets/products/Adjustable_Base_Jacks.jpg",
        specs: ["Diameter: 38–48 mm", "Adjustment: up to 600 mm", "Galvanized steel"],
      },
      {
        type: "img",
        title: "Steel Scaffold Planks",
        desc: "Anti-slip planks for working surfaces.",
        img: "/assets/products/Steel_Scaffold_Planks.jpg",
        specs: ["Lengths: 1.0 – 3.0 m", "Anti-slip surface", "Secure locking hooks"],
      },
      {
        type: "img",
        title: "Full Scaffolding Safety Kit",
        desc: "Complete safety protection equipment.",
        img: "/assets/products/Full_Scaffolding_Safety_Kit.png",
        specs: ["Harness and double lanyard", "Helmet and vest", "Gloves and safety shoes"],
      },
    ],
    []
  )

  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto text-center">
          <h1 className="text-[#214f9b] font-[900] uppercase text-[30px] md:text-[40px]">
            ALL PRODUCTS
          </h1>
          <p className="mt-[10px] text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7] max-w-[820px] mx-auto">
            Discover our range of professional scaffolding systems, components, and safety equipment designed for
            reliable, secure, and efficient construction projects.
          </p>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {products.map((p, idx) => (
              <article
                key={`${p.title}-${idx}`}
                className="group rounded-[16px] overflow-hidden"
              >
                {p.type === "3d" ? (
                  <div className="relative bg-[#eef3fb] rounded-[16px] overflow-hidden">
                    <model-viewer
                      class="w-full h-[320px]"
                      src={p.model}
                      alt={p.title}
                      camera-controls
                      auto-rotate
                      shadow-intensity="1"
                      interaction-prompt="none"
                      loading="eager"
                      ar-modes="webxr scene-viewer quick-look"
                    />
                    <span className="absolute top-[12px] left-[12px] bg-[#214f9b] text-white text-[12px] font-[900] px-[10px] py-[6px] rounded-full z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-out">
                      {p.badge}
                    </span>
                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 ease-out flex flex-col justify-center p-[18px]">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <p className="text-white text-[14px] leading-[1.7] mb-[12px] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          {p.desc}
                        </p>
                        <ul className="space-y-[6px] text-[13px] text-white mb-[12px] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-[75ms]">
                          {p.specs.map((s) => (
                            <li key={`${p.title}-${s}`} className="flex gap-[8px]">
                              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-white" />
                              <span className="leading-[1.6]">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative bg-[#eef3fb] rounded-[16px] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-[320px] object-cover"
                      loading="lazy"
                    />
                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 ease-out flex flex-col justify-center p-[18px]">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <p className="text-white text-[14px] leading-[1.7] mb-[12px] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          {p.desc}
                        </p>
                        <ul className="space-y-[6px] text-[13px] text-white mb-[12px] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-[75ms]">
                          {p.specs.map((s) => (
                            <li key={`${p.title}-${s}`} className="flex gap-[8px]">
                              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-white" />
                              <span className="leading-[1.6]">{s}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex w-full justify-center rounded-[12px] px-[14px] py-[10px] border-2 border-white text-white font-[900] uppercase text-[13px] hover:bg-white hover:text-[#214f9b] transition-all opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300 ease-out delay-[150ms] mt-[12px]"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <h3 className="font-[900] text-[16px] mt-[12px] text-center">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[55px] bg-[#eef3fb]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <div className="text-center md:text-left">
            <h2 className="text-[#214f9b] font-[900] uppercase text-[22px] md:text-[28px]">
              Need a Quote for Your Next Project?
            </h2>
            <p className="mt-[8px] text-[#4a5c7a] text-[14px] leading-[1.7]">
              Share your project details and we’ll recommend the best system for your needs.
            </p>
          </div>

          <a
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[900] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            Send us your enquiry over WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default Products
