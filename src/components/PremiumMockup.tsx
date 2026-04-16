 "use client";

import React from "react";
import {
  ArrowUpRight,
  Bell,
  BrainCircuit,
  Building2,
  Mail,
  MessageSquareMore,
  PanelLeft,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const trendData = [
  { name: "Ene", actividad: 420 },
  { name: "Feb", actividad: 510 },
  { name: "Mar", actividad: 560 },
  { name: "Abr", actividad: 630 },
  { name: "May", actividad: 710 },
  { name: "Jun", actividad: 790 },
];

const centerData = [
  { centro: "Polanco", valor: 86 },
  { centro: "Interlomas", valor: 81 },
  { centro: "Satélite", valor: 74 },
  { centro: "Coyoacán", valor: 68 },
  { centro: "Del Valle", valor: 63 },
];

const metricCards = [
  {
    label: "Usuarios monitoreados",
    value: "128k",
    detail: "Cobertura activa en toda la operación conectada",
  },
  {
    label: "Riesgo de abandono detectado",
    value: "1,284",
    detail: "Usuarios priorizados para intervención inmediata",
  },
  {
    label: "Alertas IA activas",
    value: "37",
    detail: "Señales en tiempo real para retención y seguimiento",
  },
];

const commandSignals = [
  "Caída de actividad detectada en usuarios de alto valor durante los últimos 7 días.",
  "Segmento premium con reducción progresiva en volumen transaccional.",
  "Usuarios nuevos sin segunda actividad dentro del periodo esperado.",
];

const videoMetrics = [
  { label: "Personas detectadas", value: "1,284" },
  { label: "Tiempo promedio en sitio", value: "12 min" },
  { label: "Eventos relevantes", value: "8" },
  { label: "Alertas críticas", value: "6" },
];

const sidebarItems = [
  "Dashboard ejecutivo",
  "Usuarios y scoring",
  "Riesgo de abandono",
  "Automatizaciones",
  "Rendimiento por centro",
  "Alertas IA",
  "Conectores y datos",
  "Configuración",
];

const topKpis = [
  { label: "Usuarios activos", value: "42,860" },
  { label: "Usuarios en riesgo", value: "1,284" },
  { label: "Flujos activos", value: "24" },
  { label: "Retención promedio", value: "82%" },
];

const customerMetrics = [
  { label: "Centro principal", value: "Polanco" },
  { label: "Valor estimado", value: "$24,800" },
  { label: "Frecuencia de actividad", value: "14 interacciones / 30 días" },
  { label: "Riesgo churn", value: "Medio" },
];

const automationRows = [
  {
    title: "Usuarios inactivos +7 días",
    subtitle: "Retención automatizada con prioridad por scoring de riesgo",
    status: "Activo",
  },
  {
    title: "Usuarios nuevos sin recurrencia",
    subtitle: "Secuencia de reactivación temprana con seguimiento comercial",
    status: "Activo",
  },
  {
    title: "Segmento alto valor en descenso",
    subtitle: "Intervención priorizada por IA según caída de actividad",
    status: "Optimización",
  },
];

const footerBlocks = [
  {
    eyebrow: "Canal prioritario",
    title: "WhatsApp",
    description: "Acciones de retención y seguimiento activadas según scoring de riesgo.",
    dark: true,
  },
  {
    eyebrow: "Modelo analítico",
    title: "Churn + scoring",
    description: "Identificación de riesgo de salida, caída de actividad y oportunidad de reactivación.",
  },
  {
    eyebrow: "Gobierno",
    title: "Seguridad y trazabilidad",
    description: "Control de datos, operación multi-centro y evolución escalable.",
  },
];

const chartTooltipStyle = {
  backgroundColor: "#fffcf7",
  border: "1px solid #e5ddd0",
  borderRadius: "18px",
  color: "#24344d",
  boxShadow: "0 18px 40px rgba(36, 52, 77, 0.08)",
};

export default function PremiumMockup() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#233146]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(216,192,153,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(110,136,166,0.12),_transparent_38%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1540px] flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-5 rounded-[30px] border border-[#e8dfd2] bg-[rgba(255,251,245,0.76)] px-6 py-5 shadow-[0_14px_40px_rgba(36,52,77,0.05)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#24344d] text-white shadow-[0_12px_30px_rgba(36,52,77,0.22)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-tight">Keptos Intelligence Platform</div>
              <div className="text-sm text-[#677487]">Customer 360 · CRM · IA · Video Analytics</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-[#677487]">
            <span className="rounded-full border border-[#e4dacb] bg-white/80 px-4 py-2">14 centros conectados</span>
            <span className="rounded-full border border-[#e4dacb] bg-white/80 px-4 py-2">DRGT + POS + marketing</span>
            <span className="rounded-full border border-[#e4dacb] bg-white/80 px-4 py-2">Operación cloud enterprise</span>
          </div>
        </header>

        <section className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="flex min-h-[680px] flex-col justify-between rounded-[42px] bg-[#24344d] p-8 text-white shadow-[0_32px_90px_rgba(36,52,77,0.22)] lg:p-12">
            <div className="max-w-[760px]">
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#dfe8f2]">
                <BrainCircuit className="h-4 w-4" />
                Supervisión ejecutiva, datos y activación comercial
              </div>

              <h1 className="max-w-[780px] text-[48px] font-semibold leading-[0.96] tracking-[-0.05em] sm:text-[58px] lg:text-[84px]">
                Una sola plataforma para detectar riesgo, activar retención y entender el comportamiento del
                usuario.
              </h1>

              <p className="mt-8 max-w-[660px] text-[19px] leading-9 text-[#d4deea] lg:text-[22px]">
                Integración de datos operativos, actividad transaccional, CRM e inteligencia artificial para
                anticipar abandono, identificar valor y activar acciones sobre usuarios con riesgo de salida
                o alto potencial.
              </p>
            </div>

            <div className="mt-12">
              <div className="mb-10 flex flex-wrap gap-4">
                <Button className="h-14 rounded-2xl bg-[#d8c099] px-7 text-[15px] font-medium text-[#24344d] hover:bg-[#cdb184]">
                  Ver visión ejecutiva
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl border-white/20 bg-white/5 px-7 text-[15px] text-white hover:bg-white/10"
                >
                  Explorar arquitectura
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {metricCards.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                  >
                    <div className="text-sm text-[#bfd0e2]">{metric.label}</div>
                    <div className="mt-3 text-[34px] font-semibold tracking-[-0.03em]">{metric.value}</div>
                    <div className="mt-3 text-sm leading-6 text-[#bfd0e2]">{metric.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-[680px] flex-col rounded-[42px] border border-[#e8dfd2] bg-[linear-gradient(180deg,rgba(255,251,245,0.96)_0%,rgba(247,243,236,0.92)_100%)] p-6 shadow-[0_24px_70px_rgba(36,52,77,0.08)] lg:p-7">
            <div className="flex flex-col gap-4 border-b border-[#ece3d8] px-2 pb-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-[520px]">
                <div className="text-sm text-[#778396]">Executive command view</div>
                <div className="mt-2 text-[32px] font-semibold tracking-[-0.03em] text-[#24344d]">
                  Vista ejecutiva integrada
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[#667487]">
                  Lectura consolidada de operación multi-centro, clientes unificados, marketing y señales
                  de IA para priorizar acción comercial sin fricción.
                </p>
              </div>

              <div className="rounded-full border border-[#e4dacb] bg-white/80 px-4 py-2 text-sm text-[#5f6d7d]">
                Actualizado hace 2 min
              </div>
            </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-[#ebe2d6] bg-[#fbf8f3] p-6">
                <div className="text-sm text-[#6d7a8c]">Usuarios en riesgo</div>
                <div className="mt-3 text-[34px] font-semibold tracking-[-0.04em] text-[#24344d]">1,284</div>
                <div className="mt-4 text-sm leading-7 text-[#6d7a8c]">
                  Priorización activa por comportamiento transaccional y señales de salida del sistema.
                </div>
              </div>
              <div className="rounded-[28px] border border-[#ebe2d6] bg-[#f2efe8] p-6">
                <div className="text-sm text-[#6d7a8c]">Flujos de retención activos</div>
                <div className="mt-3 text-[34px] font-semibold tracking-[-0.04em] text-[#24344d]">24</div>
                <div className="mt-4 text-sm leading-7 text-[#6d7a8c]">
                  Automatizaciones sincronizadas para retención, reactivación y seguimiento comercial.
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {commandSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start justify-between gap-4 rounded-[24px] border border-[#ece3d8] bg-white/80 px-5 py-4"
                >
                  <div className="text-[15px] leading-7 text-[#334155]">{signal}</div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#708096]" />
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-[32px] bg-[#24344d] p-6 text-white">
              <div className="text-sm text-[#bfd0e2]">Roadmap funcional</div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] bg-white/8 p-4">
                  <div className="text-sm text-[#bfd0e2]">Data Layer</div>
                  <div className="mt-2 text-[18px] font-medium">Actividad, usuarios, transacciones y eventos</div>
                </div>
                <div className="rounded-[24px] bg-white/8 p-4">
                  <div className="text-sm text-[#bfd0e2]">CRM Layer</div>
                  <div className="mt-2 text-[18px] font-medium">Seguimiento, segmentación y automatización</div>
                </div>
                <div className="rounded-[24px] bg-white/8 p-4">
                  <div className="text-sm text-[#bfd0e2]">IA Layer</div>
                  <div className="mt-2 text-[18px] font-medium">Churn, scoring, riesgo y recomendación</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[40px] border border-[#e8dfd2] bg-[rgba(255,251,245,0.94)] p-6 shadow-[0_24px_70px_rgba(36,52,77,0.07)] lg:p-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm text-[#7a8798]">Performance layer</div>
                <div className="mt-2 text-[34px] font-semibold tracking-[-0.03em] text-[#24344d]">
                  Evolución de actividad y retención
                </div>
                <p className="mt-3 max-w-[620px] text-[15px] leading-7 text-[#6c798b]">
                  Lectura integrada de actividad, retención y usuarios recurrentes para toma de decisiones
                  con prioridad comercial.
                </p>
              </div>
              <div className="rounded-full border border-[#e4dacb] bg-[#f3ece2] px-4 py-2 text-sm text-[#687688]">
                Actividad + retención
              </div>
            </div>

            <div className="h-[420px] rounded-[32px] border border-[#ece3d8] bg-[#fcfaf6] p-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillIngresos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6d86a2" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#6d86a2" stopOpacity={0.04} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#ebe3d6" vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#7b8798", fontSize: 12 }}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#7b8798", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    cursor={{ stroke: "#d8c099", strokeDasharray: "4 4" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="actividad"
                    stroke="#24344d"
                    fill="url(#fillIngresos)"
                    strokeWidth={3}
                    activeDot={{ r: 5, fill: "#d8c099", stroke: "#24344d", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[40px] border border-[#e8dfd2] bg-[rgba(255,251,245,0.94)] p-6 shadow-[0_24px_70px_rgba(36,52,77,0.07)] lg:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-[#7a8798]">Video intelligence</div>
                <div className="mt-2 text-[34px] font-semibold tracking-[-0.03em] text-[#24344d]">
                  Capa operativa con IA visual
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#eef1f5] text-[#5d6b7d]">
                <Video className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {videoMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[28px] border border-[#ece3d8] bg-[#fbf8f3] p-5"
                >
                  <div className="text-sm text-[#758295]">{metric.label}</div>
                  <div className="mt-3 text-[32px] font-semibold tracking-[-0.04em] text-[#24344d]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[30px] bg-[#24344d] p-6 text-white">
              <div className="text-sm text-[#bfd0e2]">Valor agregado</div>
              <p className="mt-3 text-[16px] leading-8 text-[#e4ebf3]">
                La analítica de video y eventos operativos puede complementar la inteligencia comercial,
                alimentando señales de comportamiento, trazabilidad de incidencias y reglas de seguimiento
                dentro del CRM.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[44px] border border-[#e8dfd2] bg-[rgba(255,251,245,0.94)] p-5 shadow-[0_26px_80px_rgba(36,52,77,0.08)] lg:p-6">
          <div className="grid gap-6 xl:grid-cols-[290px_1fr]">
            <aside className="flex min-h-[980px] flex-col rounded-[34px] bg-[#24344d] p-5 text-white lg:p-6">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-white/10">
                  <PanelLeft className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[18px] font-medium">CRM Workspace</div>
                  <div className="text-sm text-[#bfd0e2]">Backend premium de operación comercial</div>
                </div>
              </div>

              <div className="space-y-3">
                {sidebarItems.map((item, index) => (
                  <div
                    key={item}
                    className={
                      index === 0
                        ? "rounded-[22px] bg-white px-4 py-3 text-[15px] font-medium text-[#24344d]"
                        : "rounded-[22px] bg-white/8 px-4 py-3 text-[15px] text-white/92"
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto rounded-[26px] border border-white/10 bg-white/8 p-5">
                <div className="text-sm text-[#bfd0e2]">Canales activos</div>
                <div className="mt-4 space-y-3 text-sm text-[#edf2f8]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquareMore className="h-4 w-4" />
                    WhatsApp
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="h-4 w-4" />
                    SMS / alertas
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-[34px] bg-[#f9f5ee] p-5 lg:p-7">
              <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-[760px]">
                  <div className="text-sm text-[#798596]">Customer operations</div>
                  <div className="mt-2 text-[38px] font-semibold tracking-[-0.04em] text-[#24344d] lg:text-[46px]">
                    Backend CRM, scoring y retención
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#778396]" />
                    <Input
                      className="h-12 w-full rounded-2xl border-[#e2d8c9] bg-[#fffdf9] pl-10 md:w-[280px]"
                      placeholder="Buscar usuario, segmento o centro"
                    />
                  </div>
                  <Button className="h-12 rounded-2xl bg-[#24344d] px-6 text-white hover:bg-[#1f2d42]">
                    Nueva acción de retención
                  </Button>
                </div>
              </div>

              <div className="mb-6 grid gap-4 xl:grid-cols-4">
                {topKpis.map((kpi) => (
                  <Card
                    key={kpi.label}
                    className="rounded-[28px] border-[#e7ddd0] bg-[#fffdf9] shadow-none"
                  >
                    <CardContent className="p-5">
                      <div className="text-sm text-[#788597]">{kpi.label}</div>
                      <div className="mt-3 text-[34px] font-semibold tracking-[-0.04em] text-[#24344d]">
                        {kpi.value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                <div className="rounded-[32px] border border-[#e6dccf] bg-[#fffdf9] p-5 lg:p-6">
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-sm text-[#798596]">Customer 360</div>
                      <div className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#24344d]">
                        Usuario 20458
                      </div>
                    </div>
                    <span className="rounded-full bg-[#e8eef5] px-4 py-2 text-sm text-[#24344d]">
                      Segmento alto valor
                    </span>
                  </div>

                  <div className="mb-5 grid gap-4 md:grid-cols-2">
                    {customerMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[24px] border border-[#ece2d5] bg-[#fbf8f2] p-4"
                      >
                        <div className="text-sm text-[#778396]">{metric.label}</div>
                        <div className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#24344d]">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] bg-[#24344d] p-5 text-white lg:p-6">
                    <div className="text-sm text-[#bfd0e2]">Recomendación IA</div>
                    <p className="mt-3 text-[16px] leading-8 text-[#e5ecf4]">
                      Disminución progresiva en frecuencia y volumen frente al patrón esperado. Se
                      recomienda activar una secuencia de retención con contacto prioritario, incentivo
                      personalizado y seguimiento automático durante las próximas 72 horas.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button className="h-11 rounded-2xl bg-[#d8c099] px-5 text-[#24344d] hover:bg-[#cdb184]">
                        Activar acción
                      </Button>
                      <Button
                        variant="outline"
                        className="h-11 rounded-2xl border-white/20 bg-white/5 px-5 text-white hover:bg-white/10"
                      >
                        Ver historial
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] border border-[#e6dccf] bg-[#fffdf9] p-5 lg:p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-[#798596]">Rendimiento por centro</div>
                      <div className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#24344d]">
                        Mapa de prioridad operativa y comercial
                      </div>
                    </div>
                    <Building2 className="mt-1 h-5 w-5 text-[#768395]" />
                  </div>

                  <div className="mb-5 h-[320px] rounded-[28px] border border-[#ece2d5] bg-[#fbf8f2] p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={centerData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid stroke="#ebe3d6" vertical={false} strokeDasharray="3 3" />
                        <XAxis
                          dataKey="centro"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#7b8798", fontSize: 12 }}
                        />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#7b8798", fontSize: 12 }} />
                        <Tooltip
                          contentStyle={chartTooltipStyle}
                          cursor={{ fill: "rgba(216, 192, 153, 0.08)" }}
                        />
                        <Bar dataKey="valor" radius={[10, 10, 0, 0]}>
                          {centerData.map((entry, index) => (
                            <Cell
                              key={entry.centro}
                              fill={index === 0 ? "#24344d" : index === 1 ? "#566d87" : "#8fa2b7"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-3">
                    {automationRows.map((row) => (
                      <div
                        key={row.title}
                        className="flex flex-col gap-3 rounded-[24px] border border-[#ece2d5] bg-[#fbf8f2] p-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <div className="text-[16px] font-medium text-[#24344d]">{row.title}</div>
                          <div className="mt-1 text-sm leading-6 text-[#778396]">{row.subtitle}</div>
                        </div>
                        <span
                          className={
                            row.status === "Optimización"
                              ? "rounded-full bg-[#f1e8d8] px-4 py-2 text-sm text-[#5f6e7f]"
                              : "rounded-full bg-[#e9eef4] px-4 py-2 text-sm text-[#5f6e7f]"
                          }
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {footerBlocks.map((block) => (
                  <div
                    key={block.title}
                    className={
                      block.dark
                        ? "rounded-[28px] bg-[#24344d] p-5 text-white"
                        : "rounded-[28px] border border-[#e7ddd0] bg-[#fffdf9] p-5 text-[#24344d]"
                    }
                  >
                    <div className={block.dark ? "text-sm text-[#bfd0e2]" : "text-sm text-[#7a8798]"}>
                      {block.eyebrow}
                    </div>
                    <div className="mt-3 text-[28px] font-semibold tracking-[-0.03em]">{block.title}</div>
                    <div className={block.dark ? "mt-3 text-sm leading-7 text-[#dbe4ee]" : "mt-3 text-sm leading-7 text-[#728093]"}>
                      {block.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
