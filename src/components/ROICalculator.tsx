import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Star } from "lucide-react";

const ROICalculator = () => {
  const [currentRevenue, setCurrentRevenue] = useState(50000);
  const [adSpend, setAdSpend] = useState(5000);
  const [desiredRoas, setDesiredRoas] = useState(3.2);
  const [averageOrderValue, setAverageOrderValue] = useState(85);

  // Based on their standard 5.5x ROAS achievement and 30% AOV improvement
  const standardRoas = 5.5;
  const newMonthlyRevenue = adSpend * standardRoas;
  const revenueIncrease = newMonthlyRevenue - currentRevenue;
  const projectedYearlyRevenue = newMonthlyRevenue * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-2xl mx-auto p-8 md:p-10 bg-card/80 backdrop-blur border-border/50 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">ROI Calculator</h2>
            <p className="text-muted-foreground text-sm">
              See what RunAds AI could do for your business. These projections are based on our average client results.
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-6 mb-8">
            {/* Current Monthly Revenue */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Current Monthly Revenue
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="text-lg h-12 pl-8 bg-background/50 border-border/50"
                />
              </div>
            </div>

            {/* Planned Monthly Ad Spend */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Planned Monthly Ad Spend
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="text-lg h-12 pl-8 bg-background/50 border-border/50"
                />
              </div>
            </div>

            {/* Desired ROAS Slider */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Desired ROAS: {desiredRoas.toFixed(1)}x
              </label>
              <div className="pt-2">
                <Slider
                  value={[desiredRoas]}
                  onValueChange={(value) => setDesiredRoas(value[0])}
                  min={1}
                  max={8}
                  step={0.1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1.0x</span>
                  <span>8.0x</span>
                </div>
              </div>
            </div>

            {/* Average Order Value */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Average Order Value
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="text-lg h-12 pl-8 bg-background/50 border-border/50"
                />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <Button className="w-full h-12 text-base mb-8 bg-primary hover:bg-primary/90">
            Calculate My ROI
          </Button>

          {/* Results Section */}
          <div className="border-t border-border/50 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Your Projected Results with RunAds AI
              </h3>
              <p className="text-sm text-muted-foreground">
                Based on our standard 5.5x ROAS achievement and 30% AOV improvement
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* New Monthly Revenue Card */}
              <div className="bg-background/50 border border-primary/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {formatCurrency(newMonthlyRevenue)}
                </div>
                <div className="text-sm text-muted-foreground mb-2">New Monthly Revenue</div>
                <div className="text-sm font-medium text-green-500">
                  +{formatCurrency(revenueIncrease)} increase
                </div>
              </div>

              {/* Projected Yearly Revenue Card */}
              <div className="bg-background/50 border border-purple-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {formatCurrency(projectedYearlyRevenue)}
                </div>
                <div className="text-sm text-muted-foreground mb-2">Projected Yearly Revenue</div>
                <div className="text-sm font-medium text-purple-500">
                  Annual potential
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-4">
                *Projections based on average client results. Individual results may vary.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">Get These Results for My Business</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
