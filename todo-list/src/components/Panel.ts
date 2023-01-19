export interface TodoList {
	text: string;
	idx: number;
}

export default function Panel({ text, idx }: TodoList) {
	return `
		<article class="panel" data-idx="${idx}">
			<p>${text}</p>
			<button type="button">수정</button>
			<button type="button">삭제</button>
		</article>
	`;
}