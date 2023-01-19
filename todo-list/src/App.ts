import { Repository } from '@/core/Repository';
import Panel, { TodoList } from '@/components/Panel';
import PageTitle from '@/components/PageTitle';
import { addEvent } from '@/core/render';
import { selector } from "@/utils";

export default function App() {
	const repository = new Repository();
	const todoList = repository.get('todo');

	function addTodoList() {
		const $input = selector<HTMLInputElement>('[name="todoList"]');

		todoList.push({
			text: $input.value,
			idx: new Date().getTime(),
		});

		repository.set('todo', todoList);

		$input.value = '';
	}

	addEvent('click', '.add', () => {
		addTodoList();
	});

	return `
    <main class="main">
    	<header class="header">
    		${PageTitle({
					title: '오늘 할 일',
					subTitle: '2023년 01월 18일',
				})}
    		<nav>
    			<input type="text" name="todoList" />
    			<button type="button" class="add">일정 추가</button>
    		</nav>
			</header>
			<section class="content">
				${todoList.map((item: TodoList) => Panel(item)).join('')}
			</section>
    </main>
  `;
}