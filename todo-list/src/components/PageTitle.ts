interface Props {
	title: string;
	subTitle?: string;
}

export default function PageTitle({ title, subTitle }: Props) {
	return `
		<div class="page-title">
			<h2>${title}</h2>
			<p>${subTitle}</p>
		</div>
	`;
}