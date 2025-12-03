import { Target, Rocket, BarChart3 } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedMetricCard = ({ icon: Icon, value, suffix = "", label, color }: any) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const { count, elementRef } = useCountUp(numericValue, 2000, value.includes('.') ? 2 : 0);
  
  const formatValue = (val: number) => {
    if (value.includes('%')) return `${val.toFixed(2)}%`;
    if (value.includes(',')) return `${Math.round(val).toLocaleString()}%`;
    return `${val.toFixed(2)}${suffix}`;
  };

  return (
    <div 
      ref={elementRef}
      className="relative p-8 bg-card/50 backdrop-blur border border-border rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Verified</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
          {formatValue(count)}
        </div>
        <div className="text-base font-medium text-foreground">{label}</div>
      </div>

      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {getDescription(label)}
        </p>
      </div>
    </div>
  );
};

const getDescription = (label: string) => {
  switch (label) {
    case "Success Rate":
      return "Experience The Power Of Effective Digital Marketing With A Remarkable 94.42% Success Rate. Our proven methodologies and data-driven approach ensure consistent performance across all campaigns.";
    case "Average ROAS":
      return "Our Agency Average Return On Ad Spend Works Out To 2100% - meaning for every $1 spent, our clients see $21 in return. Industry-leading performance that speaks for itself.";
    default:
      return "";
  }
};

const DetailMetricRow = ({ label, value }: { label: string; value: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const { count, elementRef } = useCountUp(numericValue, 2500, value.includes('.') ? 1 : 0);
  
  const formatValue = (val: number) => {
    if (value.includes('%')) return `${val.toFixed(1)}%`;
    return val.toFixed(1);
  };

  return (
    <div ref={elementRef} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0 hover:bg-primary/5 px-4 rounded transition-colors">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-base font-bold text-foreground">{formatValue(count)}</span>
    </div>
  );
};

const Metrics = () => {
  const mainMetrics = [
    { icon: Target, value: "94.42%", label: "Success Rate", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, value: "2,100%", label: "Average ROAS", color: "from-pink-500 to-rose-500" }
  ];

  const leftColumnMetrics = [
    { label: "Campaign Success Rate", value: "97.8%" },
    { label: "Client Retention", value: "89.2%" },
    { label: "Goal Achievement", value: "94.5%" },
    { label: "ROI Positive Rate", value: "96.1%" }
  ];

  const rightColumnMetrics = [
    { label: "E-commerce ROAS", value: "2,850%" },
    { label: "Lead Gen ROAS", value: "1,650%" },
    { label: "Brand Awareness", value: "1,850%" },
    { label: "Retargeting ROAS", value: "3,200%" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Performance Metrics</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Numbers Don't Lie <span className="text-primary">(And Neither Do We)</span>
          </h2>
        </div>

        {/* Main 2 Metric Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {mainMetrics.map((metric, index) => (
            <AnimatedMetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Detailed Metrics Section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4 text-foreground">Campaign Performance</h4>
            <div className="space-y-1">
              {leftColumnMetrics.map((metric, i) => (
                <DetailMetricRow key={i} {...metric} />
              ))}
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4 text-foreground">Category ROAS</h4>
            <div className="space-y-1">
              {rightColumnMetrics.map((metric, i) => (
                <DetailMetricRow key={i} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
