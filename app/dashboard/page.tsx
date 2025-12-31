"use client";
import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type StatCardProps = {
  title: string;
  value: string;
  subtext?: string;
  delta?: string;
  icon?: React.ReactNode;
};

function Dashboard() {
  return <div>Dashboard</div>;
}

export default Dashboard;
