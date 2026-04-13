import './globals.css'

export const metadata = {
  title: "Análise de Dados Sob Medida | Organização e Insights com Excel",
  description: "Transformo suas planilhas bagunçadas em dados organizados e insights acionáveis. Análise humana, personalizada e 100% segura.",
  keywords: "análise de dados, planilhas excel, organização de dados, consultoria dados, insights empresariais",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233b82f6'%3E%3Cpath d='M3 3h18v4H3V3zm0 6h18v4H3V9zm0 6h18v4H3v-4z'/%3E%3C/svg%3E",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-950 text-white">
        {children}
      </body>
    </html>
  )
}