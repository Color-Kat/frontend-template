# Frontend Template
React, TS, scss, tailwind, zustand, react-router-dom.

В проекте сконфигурированы алиасы:
`@ @scss @assets @UI @components @modules @pages @hooks @utils`

В `scss/fonts.scss` можно подключить дополнительные шрифты и указать классы для их использования,
также тут можно прописать стили для текста

Чтобы было удобнее прописывать длинные tailwind стили в jsx,
используем `twJoin()` или `twMerge()` - последний ещё и устраняет конфликты, удобно, когда через пропсы
передается className

В utils хранятся вспомогательные функции (можете добавлять сюда свои функции - создадим свою библиотеку!)

В types прописываются глобальные типы. Если какие-то типы относятся к одному компоненту,
то лучше их прописать в одном файле с компонентом. Если к группе компонентов в контексте одного модуля,
то лучше создать отдельный types.ts файл, относящийся только к этому модулю

**UI** - набор компонентов без логики, с помощью которых строится интерфейс.
**components** - набор обычных компонентов с небольшим кол-вом логики.
**modules** - отдельные модули (виджеты), которые обычно состоят из других компонентов.
**pages** - страницы (В идеале все страницы должны состоять только из модулей, компонентов и UI без дополнительной логики)

**context** - папка, в которой будут хранится все контексты и провайдеры.
Если провайдер глобальный (Он оборачивает всё приложение, то его нужно просто добавить в 
AppContextProvider.tsx. Там используется CombineProviders.)

**hooks** - набор хуков (Если хук относится к отдельному модулю или компоненту - лучше вынести его в папку hooks рядом с модулем или компонентом).

В `modules/Layoutd` определен Layout для всего приложения целиком.

**src/assets** или **public** - здесь храним статические ассеты. 
Если храним картинку или что-то еще в public, то она подключается "/img.png",
если храним её в assets, то её нужно импортировать `import img from "@assets/img.png"`,
а затем использовать img в качестве пути. Через import vite оптимизирует картинки.



