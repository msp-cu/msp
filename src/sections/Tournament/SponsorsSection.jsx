import { motion } from "framer-motion";

function SponsorsSection() {
  const partners = [
    // {
    //   name: "Minders",
    //   logo: "/partners/student activities/Minders.jpg",
    // },
    {
      name: "",
      logo: "",
    },
    {
      name: "",
      logo: "",
    },
    {
      name: "",
      logo: "",
    },

    {
      name: "",
      logo: "",
    },
  ];

  const sponsors = [
    {
      name: "",
      logo: "",
    },
    {
      name: "",
      logo: "",
    },
    {
      name: "",
      logo: "",
    },
    {
      name: "",
      logo: "",
    },
  ];

  const renderGrid = (items) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="
            bg-black/40 border border-neonPink
            rounded-xl p-6
            flex items-center justify-center
            shadow-[0_0_10px_#ff2fd2]
            hover:shadow-[0_0_25px_#ff2fd2]
            hover:scale-105
            transition duration-300
          "
        >
          <img
            src={item.logo}
            alt={item.name}
            className="max-h-16 object-contain"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto py-28 px-6 text-center">
      {/* PARTNERS */}
      <h2 className="font-pixel text-neonPink text-2xl tracking-widest animate-pulse">
        OFFICIAL PARTNERS
      </h2>
      {renderGrid(partners)}

      {/* SPONSORS */}
      <h2 className="font-pixel text-neonPink text-2xl tracking-widest mt-20 animate-pulse">
        TOURNAMENT SPONSORS
      </h2>
      {renderGrid(sponsors)}
    </section>
  );
}

export default SponsorsSection;
