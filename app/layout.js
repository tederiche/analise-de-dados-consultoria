import './globals.css'

export const metadata = {
  title: "Análise de Dados Sob Medida | Organização e Insights com Excel",
  description: "Transformo suas planilhas bagunçadas em dados organizados e insights acionáveis. Análise humana, personalizada e 100% segura.",
  keywords: "análise de dados, planilhas excel, organização de dados, consultoria dados, insights empresariais",
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