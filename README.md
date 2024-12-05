<h1>Менеджер контактов</h1>

<h2>Описание приложения</h2>
Менеджер контактов - это веб-приложение для управления контактами, позволяющее пользователям добавлять, редактировать, удалять и искать контакты. Приложение создано с использованием Vue 3 и различных современных технологий.

<h2>Технологии</h2>
- <strong>Nuxt3</strong>
- <strong>TypeScript</strong>
- <strong>Pinia</strong> (для управления состоянием)
- <strong>vee-final-modal</strong> (для модальных окон)
- <strong>vee-validate</strong> (для валидации форм)
- <strong>Yup</strong> (для описания схем валидации)
- <strong>Tailwind CSS</strong> (для стилизации)
- <strong>v-maska</strong> (для маскирования ввода в поля)

<h2>Основные функции</h2>
1. <strong>Добавление контактов</strong>: Пользователи могут добавлять новые контакты, вводя имя, телефон и email.
2. <strong>Редактирование контактов</strong>: Приложение позволяет редактировать существующие контакты.
3. <strong>Удаление контактов</strong>: Пользователи могут удалять ненужные контакты.
4. <strong>Поиск по имени</strong>: Реализована функциональность для поиска контактов по имени.

<h2>Архитектура компонентов</h2>
Приложение разделено на несколько компонентов:
- <strong>App.vue</strong>: Основной компонент приложения.
- <strong>ContactList.vue</strong>: Компонент для отображения списка контактов.
- <strong>ContactItem.vue</strong>: Компонент для отображения одного контакта.
- <strong>ContactAddForm.vue</strong>: Компонент для добавления контактов.
- <strong>ContactEditForm.vue</strong>: Компонент для редактирования контактов.
- <strong>SearchBar.vue</strong>: Компонент для поиска контактов.

<h2>Переиспользуемые компоненты</h2>
- <strong>Button</strong>: Компонент для отображения кнопок с поддержкой различных стилей и действий.
- <strong>InputModalText</strong>: Компонент для текстового ввода в модальных окнах, обеспечивающий удобство ввода данных.

<h2>Реактивность</h2>
Приложение использует реактивные свойства для управления состоянием контактов и их обновления в режиме реального времени.

<h2>Валидация форм</h2>
Формы для добавления и редактирования контактов имеют встроенную валидацию, проверяющую обязательные поля и формат email.

<h2>Хранение данных</h2>
Данные о контактах хранятся в `localStorage`, что позволяет сохранять информацию даже после перезагрузки страницы.

<h2>Используемые подходы</h2> 
- Компонентный подход: Приложение разбито на переиспользуемые компоненты, что упрощает поддержку и развитие приложения.
- Реактивные состояния: Использование Pinia для управления состоянием позволяет легко взаимодействовать с данными приложения.
- Валидация форм: Использование vee-validate и Yup обеспечивает надежную валидацию пользовательского ввода.
- Маскирование ввода: v-maska используется для улучшения пользовательского опыта при вводе номеров телефонов.

<h2>Установка и запуск</h2>
1. Клонируйте репозиторий.
   <pre><code class="language-bash" id="code-block-rmfwykaqa">git clone https://github.com/SusanWay/Contact-Management.git</code></pre>
2. Установите зависимости:
   <pre><code class="language-bash" id="code-block-rmfwykaqj">pnpm install</code></pre>
3. Запустите приложение:
   <pre><code class="language-bash" id="code-block-yl6gn844b">pnpm dev</code></pre>

Теперь вы можете начать управлять своими контактами с помощью приложения "Менеджер контактов"!