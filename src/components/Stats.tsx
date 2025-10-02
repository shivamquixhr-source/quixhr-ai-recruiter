const stats = [
  {
    value: "20+",
    label: "Hours Saved Monthly",
    description: "Average time saved per HR professional"
  },
  {
    value: "85%",
    label: "Faster Screening",
    description: "AI-powered candidate filtering"
  },
  {
    value: "3x",
    label: "More Qualified Hires",
    description: "Better matches through smart filtering"
  },
  {
    value: "100%",
    label: "Centralized",
    description: "All applications in one place"
  }
];

const Stats = () => {
  return (
    <section className="py-16 px-4 border-y border-border bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-sm font-semibold">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
