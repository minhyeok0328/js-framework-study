import { Repository } from '@/core/Repository';
import Panel from '@/components/Panel';
import PageTitle from '@/components/PageTitle';
import {addEvent} from "@/core/render";

export default function App() {
	const repository = new Repository();
	console.log(repository);

	return `
    <main class="main">
    	<header class="header">
    		${PageTitle({
					title: '오늘 할 일',
					subTitle: '2023년 01월 18일',
				})}
    		<nav>
    			<input type="text" />
    			<button type="button" class="add">일정 추가</button>
    		</nav>
			</header>
			<section class="content">
				${Panel()}
			</section>
    </main>
  `;
}