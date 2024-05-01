import { useRef, useEffect } from "react"

export default function Home() {
    const slider = useRef(null);
    let imageIndex = useRef(-1);
    const images = ["food-photographer-Sekm9_nC2BM-unsplash.jpg", "irene-kredenets-6unxGRCPg0U-unsplash.jpg", "khloe-arledge-ND3edEmzcdQ-unsplash.jpg", "monika-grabkowska-_y6A9bhILkM-unsplash.jpg", "peter-dawn-3X7SVgAxKU8-unsplash.jpg"];

    useEffect(() =>{
        setInterval(() => {
            let img = document.createElement("img");
            imageIndex.current = imageIndex.current < images.length-1?imageIndex.current+1:0;
            img.src = `./${images[imageIndex.current]}`;
            img.classList.add("slider-img");
            img.style.position = "absolute";
            img.addEventListener("animationend", () => {
                slider.current.removeChild(slider.current.firstChild);
            })
            slider.current.appendChild(img);
        }, 1500)
    },[])

  return (
    <section className="w-[100vw] h-[92vh] bg-blue-100 box-border flex items-center justify-around">
        <div className="w-1/3 h-1/2">
            <h1 className="text-5xl font-bold text-indigo-800">Welcome</h1>
            <p className="text-indigo-800 tracking-tighter font-sans font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, repellat. Veniam enim voluptate voluptates quasi, excepturi magnam harum sequi quidem rerum odio. In labore, quidem quaerat aliquid magni nisi deserunt maxime voluptate ea iste, natus animi fugit. Alias tempora cumque et natus iste magnam, quasi,</p>
        </div>
        <div id="slider" ref={slider} className="w-[15vw] h-[30vh] relative overflow-hidden">
        </div>
    </section>
  )
}
