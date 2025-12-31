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

function StatCard({ title, value, subtext, delta, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-100 text-zinc-700">
            {icon ?? <span className="text-sm">◎</span>}
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
              {value}
            </p>
            {subtext ? (
              <p className="mt-1 text-xs text-zinc-500">{subtext}</p>
            ) : null}
          </div>
        </div>

        {delta ? (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
            {delta}
          </span>
        ) : (
          <span className="text-xs text-zinc-400"> </span>
        )}
      </div>
    </div>
  );
}

type NavItem = {
  label: string;
  active?: boolean;
  badge?: number;
};

function Sidebar() {
  const items: NavItem[] = [
    { label: "Dashboard", active: true },
    { label: "Drop-offs", badge: 12 },
    { label: "In Progress", badge: 8 },
    { label: "Completed" },
    { label: "Customers" },
    { label: "Revenue" },
    { label: "Schedule" },
    { label: "Settings" },
  ];

  return (
    <aside className="hidden h-screen w-[260px] shrink-0 border-r border-zinc-200 bg-white md:flex md:flex-col">
      <div className="flex items-center gap-2 px-5 py-4">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white">
          <span className="text-sm font-semibold">L</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">LaundroHub</p>
          <p className="text-xs text-zinc-500">Admin Console</p>
        </div>
      </div>

      <nav className="px-3 py-2">
        <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
          Menu
        </p>
        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href="#"
                className={[
                  "flex items-center justify-between rounded-xl px-3 py-2 text-sm",
                  it.active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100",
                ].join(" ")}
              >
                <span className="font-medium">{it.label}</span>
                {typeof it.badge === "number" ? (
                  <span
                    className={[
                      "rounded-full px-2 py-0.5 text-xs font-semibold",
                      it.active
                        ? "bg-white/15 text-white"
                        : "bg-zinc-200 text-zinc-700",
                    ].join(" ")}
                  >
                    {it.badge}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-zinc-200 p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-zinc-200" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-900">
              John Davis
            </p>
            <p className="text-xs text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

const dropoffTrend = [
  { day: "Mon", orders: 24 },
  { day: "Tue", orders: 32 },
  { day: "Wed", orders: 28 },
  { day: "Thu", orders: 45 },
  { day: "Fri", orders: 38 },
  { day: "Sat", orders: 52 },
  { day: "Sun", orders: 41 },
];

const serviceDist = [
  { name: "Wash & Fold", value: 45 },
  { name: "Dry Cleaning", value: 28 },
  { name: "Express", value: 18 },
  { name: "Ironing", value: 9 },
];

const serviceColors = ["#4F46E5", "#8B5CF6", "#F59E0B", "#10B981"];

type DropoffRow = {
  id: string;
  customer: string;
  email: string;
  service: string;
  weight: string;
  status: "In Progress" | "Ready" | "Processing";
  amount: string;
};

const recent: DropoffRow[] = [
  {
    id: "#LD-2847",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    service: "Wash & Fold",
    weight: "12 lbs",
    status: "In Progress",
    amount: "$36.00",
  },
  {
    id: "#LD-2846",
    customer: "Michael Chen",
    email: "m.chen@email.com",
    service: "Dry Cleaning",
    weight: "5 items",
    status: "Ready",
    amount: "$45.00",
  },
  {
    id: "#LD-2845",
    customer: "Emily Rodriguez",
    email: "emily.r@email.com",
    service: "Wash & Fold",
    weight: "18 lbs",
    status: "Processing",
    amount: "$54.00",
  },
  {
    id: "#LD-2844",
    customer: "David Park",
    email: "d.park@email.com",
    service: "Express Service",
    weight: "8 lbs",
    status: "In Progress",
    amount: "$48.00",
  },
  {
    id: "#LD-2843",
    customer: "Jessica Lee",
    email: "j.lee@email.com",
    service: "Wash & Fold",
    weight: "15 lbs",
    status: "Ready",
    amount: "$45.00",
  },
];

function StatusPill({ status }: { status: DropoffRow["status"] }) {
  const map: Record<DropoffRow["status"], string> = {
    "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
    Ready: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Processing: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        map[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}

function TopBar() {
  return (
    <div className="flex flex-col gap-3 border-b border-zinc-200 bg-white px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-zinc-500">Today, Dec 29, 2024</p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
        <div className="relative w-full sm:w-[320px]">
          <input
            placeholder="Search orders..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 pl-10 text-sm text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            🔎
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
            Export Report
          </button>
          <button className="rounded-xl bg-zinc-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800">
            + New Drop-off
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <TopBar />

          <div className="px-4 py-6 md:px-6">
            {/* Stat cards */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Drop-offs"
                value="127"
                subtext="vs. 113 last week"
                delta="↑ 12%"
                icon={<span className="text-sm">📦</span>}
              />
              <StatCard
                title="In Progress"
                value="43"
                subtext="8 ready for pickup"
                delta="— 0%"
                icon={<span className="text-sm">🕒</span>}
              />
              <StatCard
                title="Revenue Today"
                value="$2,847"
                subtext="vs. $2,412 yesterday"
                delta="↑ 18%"
                icon={<span className="text-sm">💲</span>}
              />
              <StatCard
                title="Avg. Rating"
                value="4.8"
                subtext="from 89 reviews"
                delta="↑ 5%"
                icon={<span className="text-sm">⭐</span>}
              />
            </div>

            {/* Charts row */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      Drop-off Trends
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Orders over the last 7 days
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-1 text-xs">
                    <button className="rounded-lg bg-white px-2 py-1 font-medium shadow-sm">
                      Orders
                    </button>
                    <button className="rounded-lg px-2 py-1 text-zinc-600 hover:bg-white/60">
                      Revenue
                    </button>
                  </div>
                </div>

                <div className="mt-4 h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={dropoffTrend}
                      margin={{ left: 0, right: 8 }}
                    >
                      <defs>
                        <linearGradient
                          id="fillOrders"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#4F46E5"
                            stopOpacity={0.25}
                          />
                          <stop
                            offset="100%"
                            stopColor="#4F46E5"
                            stopOpacity={0.02}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#71717A" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#71717A" }}
                        width={30}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          border: "1px solid #E4E4E7",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                        }}
                        labelStyle={{ color: "#18181B", fontWeight: 600 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="orders"
                        stroke="#4F46E5"
                        strokeWidth={2}
                        fill="url(#fillOrders)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Service Distribution
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Split by service type
                  </p>
                </div>

                <div className="mt-4 h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceDist}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={58}
                        outerRadius={90}
                        paddingAngle={2}
                      >
                        {serviceDist.map((_, idx) => (
                          <Cell
                            key={idx}
                            fill={serviceColors[idx % serviceColors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          border: "1px solid #E4E4E7",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 space-y-2">
                  {serviceDist.map((s, idx) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full"
                          style={{ background: serviceColors[idx] }}
                        />
                        <span className="text-zinc-700">{s.name}</span>
                      </div>
                      <span className="font-medium text-zinc-900">
                        {s.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex items-center justify-between px-4 py-4 md:px-6">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Recent Drop-offs
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Latest orders and statuses
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  View All
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-t border-zinc-200">
                  <thead className="bg-zinc-50">
                    <tr className="text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      <th className="px-4 py-3 md:px-6">Order ID</th>
                      <th className="px-4 py-3 md:px-6">Customer</th>
                      <th className="px-4 py-3 md:px-6">Service</th>
                      <th className="px-4 py-3 md:px-6">Weight</th>
                      <th className="px-4 py-3 md:px-6">Status</th>
                      <th className="px-4 py-3 md:px-6">Amount</th>
                      <th className="px-4 py-3 md:px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recent.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-zinc-100 text-sm hover:bg-zinc-50/60"
                      >
                        <td className="px-4 py-4 md:px-6 font-medium text-zinc-900">
                          {r.id}
                        </td>

                        <td className="px-4 py-4 md:px-6">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-zinc-200" />
                            <div className="min-w-0">
                              <p className="truncate font-medium text-zinc-900">
                                {r.customer}
                              </p>
                              <p className="truncate text-xs text-zinc-500">
                                {r.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 md:px-6 text-zinc-700">
                          {r.service}
                        </td>
                        <td className="px-4 py-4 md:px-6 text-zinc-700">
                          {r.weight}
                        </td>
                        <td className="px-4 py-4 md:px-6">
                          <StatusPill status={r.status} />
                        </td>
                        <td className="px-4 py-4 md:px-6 font-semibold text-zinc-900">
                          {r.amount}
                        </td>
                        <td className="px-4 py-4 md:px-6">
                          <div className="flex items-center justify-end gap-2">
                            <button className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50">
                              View
                            </button>
                            <button className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50">
                              ⋯
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Tip: wire this to your real data via server actions or API routes
              and keep this page as a client “dashboard shell”.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
