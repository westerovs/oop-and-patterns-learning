// ==================================
// ========= Resource Sharing =======
// =================== ==============

/*
Чтобы избавиться от минусов copy on write, можно сделать следующее: если какие-то части состояния остаются неизменными, будем копировать их по ссылке. Независимые копии будем создавать лишь для частей состояния, которые фактически были изменены. Такой подход называется Resource Sharing, совместное использование ресурсов.

Resource Sharing производительнее, чем Copy On Write, однако страдает надёжность: теоретически есть возможность изменить то, что не должно быть изменено.

- Создадим новый массив;
- Создадим копию второго объекта;
- Модифицируем копию второго объекта;
- Положим в новый массив неизменный первый объект, изменённую копию второго объекта и неизменный третий объект.
*/

const state = [
    {
        name: 'Товар 1',
    },
    {
        name: {
            first: {
                name: 'Товар 2'
            }
        },
    },
    {
        name: 'Товар 3',
    },
];


function ResourceSharing(array) {
    const newArr = [];

    array.forEach((item, index) => {
        if (index === 1) {
            const temp = Object.assign({}, array[index])
            newArr.push(temp)
        }
        else newArr.push(item);
    });

    return newArr
}

const newStateSharing = ResourceSharing(state)
newStateSharing[1].name = 'жеребёнок';
console.log(state) // исходный массив не мутирован
console.log(newStateSharing) // новый массив мутирован