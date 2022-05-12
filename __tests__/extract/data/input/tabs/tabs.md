# Табы

## Таб обычный

{% list tabs %}

- Первый Таб

  Текст первого таба

- Второй Таб

  Текст второго таба

{% endlist %}

## Таб с строчным форматированием

{% list tabs %}

- Первый Таб

  Верхний\^регистр^

  раз\?два

  ага, т. е. ты имел ввиду это?

  Предложение один. Предложение два? Предложение три! Предложение четыре.

- Второй Таб

  **Полужирный текст**

  _Курсив_

  **_Полужирный курсив_**

  _**Тоже полужирный курсив**_

  ~~Зачеркнутый текст~~

  Верхний^регистр^

  ##Моноширинный текст##

  # Заголовок h1

  ## Заголовок h2

  ### Заголовок h3

  #### Заголовок h4

  > Цитирование

  > Цитирование
  >> Вложенное цитирование

{% endlist %}

## Таб с списком

{% list tabs %}

- Фрукты

  - манго
    * вкусное
    * полезное
  - бананы
  - мандарины
  - яблоки
    + зелёные
    + красные

- Овощи

  1. помидоры
    1. красные
    2. желтые
  2. огурцы
  3. кейл
  4. авакадо

{% endlist %}

## Таб с простой таблицей с ссылками и с мультистрочной таблицей с медиа

{% list tabs %}

- Обычная таблица

  | Заголовок 1 | Заголовок 2 |
  | :------ | :-----: |
  | ссылка стандартная | [текст_ссылки](url "текст_подсказки") |
  | ссылка на md-файл | [{#T}](./index.md) |
  | ссылка url | <https://yandex.com/> |
  | ссылка email | <alice.the.girl@yandex.com> |
  | ссылка ref | [Яндекс][1] |

- Мультистрочная таблица

  #|
  || медиа |
  ![alt-текст](_images/image.png "текст_подсказки" =100x100)
  [![Альт-текст картинки внутри ссылки](../../_images/mountain.jpg "подсказка картинки внутри ссылки" =100x200)](https://yandex.com/images/search?text=mountain)
  ![Альт-текст реф картинки][image1]
  @[название_видеохостинга](video_id) ||
  |#

{% endlist %}

{% list tabs %}

- Код

  ```markdown
  [//]: Комментарий
  ```

- Инлайн код

  Предложение `[//]: Комментарий` содержит инлайн код.

{% endlist %}

## Таб с катом

{% list tabs %}

- Первый кат

  {% cut "Заголовок первого ката" %}

  Контент, который отобразится по нажатию.

  {% endcut %}

- Второй кат

  {% cut "Заголовок второго ката" %}

  Контент, который отобразится по нажатию.

  {% endcut %}

{% endlist %}

## Таб с табами

{% list tabs %}

- Первый Таб

  {% list tabs %}

  - Первый вложенный таб

    Текст первого вложенного таба

  - Второй вложенный таб

    Текст второго вложенного таба

  {% endlist %}

- Второй Таб

  {% list tabs %}

  - Первый вложенный таб

    Текст первого вложенного таба

  - Второй вложенный таб

    Текст второго вложенного таба

  {% endlist %}

{% endlist %}

## Таб с заметками

{% list tabs %}

- Заметка Информация

  {% note info %}

  Информация

  {% endnote %}

- Заметка Предупреждение

  {% note warning %}

  Предупреждение

  {% endnote %}

{% endlist %}

[1]: https://yandex.com/ "Лучший поисковик"
[image1]: ../../_images/mountain.jpg "подсказка реф картинки"