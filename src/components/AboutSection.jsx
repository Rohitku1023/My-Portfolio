const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
          I’m Rohit Kumar, a passionate developer with experience in React,
          TailwindCSS, and modern web technologies. I enjoy building clean,
          responsive UIs and solving real-world problems with code.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
