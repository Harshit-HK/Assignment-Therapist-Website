import Star from "@/components/Star";
import { services } from "@/data/services";

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id.toString() }));
}

export default async function ServiceDetail({ params }) {
  const paramId = await params;
  const id = paramId.id;

  const service = services.find((s) => s.id.toString() === id);

  if (!service) return <div>Service not found.</div>;

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-[rgb(245,247,250)]"
      style={{
        backgroundImage: `url('${service.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-black/30 rounded-xl w-full h-[100vh] flex flex-col justify-center items-center space-y-6">
        <div className="text-center w-[90%] md:w-[80%] ">
          <h2 className="text-sm ">{service.title}</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {service.panelHeadingTitle}
          </h1>
          <p className="md:text-2xl font-medium">{service.description}</p>
        </div>

        <div className="flex gap-3">
          <span className="text-sm font-bold flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="gold"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star h-4 text-black"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>{" "}
            <span>
            {" "}Top Rated
            </span>
          </span>
          <span className="text-xs font-bold">•</span>
          <a href="#" className="text-xs font-bold hover:underline">
            40+ Years Experience
          </a>
          <span className="text-xs font-bold">•</span>
          <a href="#testimonials" className="text-xs font-bold hover:underline">
            Testimonials
          </a>
          <span className="text-xs font-bold">•</span>
          <a href="#" className="text-xs font-bold hover:underline">
            Media Mentions
          </a>
        </div>

        <a
          href="#contact"
          className=" flex  bg-slate-100 text-[rgb(30,58,138)] px-6 py-3 my-4 rounded-xl transition "
        >
          <Star />
          Start Healing Today
        </a>
      </div>
    </section>
  );
}
