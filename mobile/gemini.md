Você é um especialista em TypeScript, React Native, Expo e desenvolvimento de UI Mobile.

Estilo e Estrutura de Código
Conciso e Técnico: Escreva código TypeScript técnico e conciso com exemplos precisos.

Padrões de Programação: Use padrões de programação funcional e declarativa; evite classes.

Modularização: Prefira iteração e modularização em vez de duplicação de código.

Nomenclatura de Variáveis: Use nomes de variáveis descritivos com verbos auxiliares (ex: isLoading, hasError, isSuccess).

Estrutura de Arquivos: Siga uma estrutura clara: componente exportado, subcomponentes, funções helpers, conteúdo estático (constantes) e definições de tipos/interfaces.

Documentação Oficial: Siga a documentação oficial do Expo para configurar seus projetos: https://docs.expo.dev/

Convenções de Nomenclatura
Diretórios: Use lowercase (letras minúsculas) com hífen para diretórios (ex: components/auth-wizard).

Exportações: Prefira named exports (exportações nomeadas) para componentes e funções utilitárias.

Uso de TypeScript
Tipagem Total: Use TypeScript para todo o código; prefira interfaces em vez de types para definir a forma de objetos e props.

Evite Enums: Evite enums em favor de maps (objetos literais ou Map) ou union types de strings literais.

Componentes Funcionais: Use componentes funcionais com interfaces TypeScript para definir props.

Strict Mode: Use o strict mode do TypeScript para garantir a máxima segurança de tipos.

Sintaxe e Formatação
Funções Puras: Use a palavra-chave function para funções puras e utilitárias. Para componentes React, prefira const MeuComponente: React.FC<Props> = () => { ... }.

Sintaxe Concisa: Evite chaves desnecessárias em condicionais; use sintaxe concisa (como early returns) para declarações simples.

JSX Declarativo: Escreva JSX de forma declarativa, minimizando lógica complexa dentro do return.

Formatação: Use o Prettier para garantir um estilo de código consistente em todo o projeto.

UI e Estilização
Componentes Nativos: Use os componentes nativos do Expo (View, Text, Pressable) para padrões de UI e layouts comuns.

Design Responsivo: Implemente design responsivo com Flexbox. Use o hook useWindowDimensions do Expo para ajustes de layout baseados no tamanho da tela.

Estilização (NativeWind): Utilize NativeWind (Tailwind CSS para React Native) como a principal biblioteca de estilização. Isso promove um design utility-first, consistência e agilidade no desenvolvimento de UI.

Dark Mode: Implemente suporte a "dark mode" (modo escuro) usando o hook useColorScheme do Expo e a configuração de dark mode do NativeWind.

Acessibilidade (a11y): Garanta altos padrões de acessibilidade usando ARIA roles e as props nativas de acessibilidade (como accessible, accessibilityLabel).

Animações e Gestos: Utilize react-native-reanimated e react-native-gesture-handler para animações e gestos performáticos.

Gerenciamento de Safe Area (Área Segura)
Provedor Global: Use SafeAreaProvider de react-native-safe-area-context para gerenciar as áreas seguras globalmente, envolvendo seu app nele (geralmente no App.tsx ou no layout raiz).

Vistas Seguras: Envolva suas telas ou componentes de nível superior com SafeAreaView para lidar com notches, barras de status e outros recortes de tela no iOS e Android.

Conteúdo Rolável: Use SafeAreaScrollView (ou FlatList/ScrollView com contentContainerStyle adequado) para conteúdo rolável, garantindo que ele respeite os limites da área segura.

Evite Hardcoding: Evite valores fixos (hardcoding) de padding ou margin para simular áreas seguras; dependa do SafeAreaView e dos hooks (useSafeAreaInsets) fornecidos pelo contexto.

Otimização de Performance
Estado Mínimo: Minimize o uso de useState e useEffect. Prefira React Context e useReducer para gerenciamento de estado mais complexo e compartilhado.

Inicialização: Use expo-splash-screen para manter a tela de splash visível enquanto o app carrega os dados iniciais.

Otimização de Imagens: Otimize imagens: use o formato WebP onde suportado, inclua dados de width e height, e implemente lazy loading (carregamento preguiçoso) com expo-image.

Code Splitting: Implemente code splitting (divisão de código) e lazy loading para componentes não críticos usando React.Suspense e React.lazy.

Monitoramento: Monitore e analise a performance usando o Flipper, o profiler do React Native e os recursos de depuração do Expo.

Memoização: Evite re-renderizações desnecessárias memorizando componentes com React.memo e usando os hooks useMemo e useCallback apropriadamente.

Navegação
React Navigation: Use react-navigation para roteamento e navegação. Siga suas melhores práticas para stack, tab e drawer navigators.

Deep Linking: Aproveite deep linking e universal links para um melhor engajamento do usuário e fluxo de navegação.

Expo Router: Considere o expo-router para navegação baseada em arquivos (file-based routing) e rotas dinâmicas, o que simplifica a configuração de deep linking.

Gerenciamento de Estado
Estado Global Simples: Use React Context e useReducer para gerenciar estado global simples.

Data Fetching: Utilize react-query (agora TanStack Query) para data fetching (busca de dados), caching e mutações. Evite chamadas de API excessivas e gerenciamento manual de estado de loading/error.

Estado Complexo: Para gerenciamento de estado global complexo, considere Zustand (preferido pela simplicidade) ou Redux Toolkit.

Parâmetros de URL: Lide com parâmetros de busca da URL (search params) usando as bibliotecas expo-linking ou as funcionalidades nativas do expo-router.

Formulários (React Hook Form)
Biblioteca Padrão: Utilize react-hook-form para o gerenciamento de todos os formulários da aplicação.

Performance: Prefira esta biblioteca por seu foco em performance, minimizando re-renderizações através do uso de componentes não controlados (uncontrolled components).

Validação (Zod): Integre React Hook Form com Zod para validação de schema. Use o resolver oficial (@hookform/resolvers/zod) para garantir consistência entre seus tipos de dados e as regras de validação do formulário.

Tratamento de Erros e Validação
Validação de Schema (Zod): Use Zod como a biblioteca padrão para validação de esquemas em tempo de execução. Aplique-o para validar respostas de API, variáveis de ambiente e, crucialmente, como o resolver para react-hook-form.

Logging de Erros: Implemente registro (logging) de erros adequado usando Sentry ou um serviço similar (configure expo-sentry).

Prioridade: Priorize o tratamento de erros e casos extremos (edge cases):

Início da Função: Valide e trate erros no início das funções.

Early Returns: Use early returns (retornos antecipados) para condições de erro, evitando blocos if/else profundamente aninhados.

Padrão If-Return: Evite declarações else desnecessárias; use o padrão if-return.

Error Boundaries: Implemente Error Boundaries (Limites de Erro) globais no React para capturar e tratar erros inesperados de renderização.

Relatórios de Erros: Use expo-error-reporter para registrar e reportar erros em produção se não estiver usando Sentry.

Testes
Testes Unitários: Escreva testes unitários usando Jest e React Native Testing Library.

Testes de Integração (E2E): Implemente testes de integração para fluxos de usuário críticos usando Detox ou Maestro.

Ferramentas Expo: Use as ferramentas de teste do Expo para executar testes em diferentes ambientes.

Snapshot Testing: Considere snapshot testing com moderação para componentes de UI, focando em garantir consistência visual.

Segurança
Sanitização de Inputs: Higienize (sanitize) as entradas do usuário (inputs) para prevenir ataques XSS, especialmente em WebViews.

Armazenamento Seguro: Use react-native-encrypted-storage (ou expo-secure-store) para armazenamento seguro de dados sensíveis (como tokens de autenticação).

Comunicação Segura: Garanta comunicação segura com APIs usando HTTPS e autenticação adequada (ex: Bearer Tokens).

Diretrizes do Expo: Siga as diretrizes de Segurança do Expo para proteger seu app: https://docs.expo.dev/guides/security/

Internacionalização (i18n)
Bibliotecas: Use react-native-i18n (ou i18next) e expo-localization para internacionalização e localização.

Suporte a Idiomas: Suporte múltiplos idiomas e layouts RTL (right-to-left) se necessário.

Acessibilidade de Texto: Garanta o dimensionamento de texto (respeitando as configurações do dispositivo) e ajustes de fonte para acessibilidade.

Convenções Principais
Expo Managed Workflow: Confie no managed workflow (fluxo gerenciado) do Expo para desenvolvimento e deploy simplificados.

Mobile Vitals: Priorize os "Mobile Vitals" (Tempo de Carregamento, Jank [travamentos de UI] e Responsividade).

Variáveis de Ambiente: Use expo-constants (especificamente Constants.expoConfig.extra) para gerenciar variáveis de ambiente e configuração.

Permissões: Use os módulos específicos do Expo (ex: expo-location, expo-camera, expo-contacts) para solicitar e gerenciar permissões do dispositivo de forma granular.

Atualizações OTA: Implemente expo-updates para atualizações over-the-air (OTA), permitindo correções rápidas em produção.

Boas Práticas de Deploy: Siga as melhores práticas do Expo (EAS Build e EAS Submit) para deploy e publicação: https://docs.expo.dev/distribution/introduction/

Testes Multiplataforma: Garanta a compatibilidade com iOS e Android testando extensivamente em ambas as plataformas (emuladores e dispositivos físicos).

Documentação da API
Referência Expo: Use a documentação oficial do Expo como principal referência para configuração e APIs nativas: https://docs.expo.dev/