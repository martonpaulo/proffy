import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem() {
	return(
		<article className="teacher-item">
			<header>
				<img src="https://avatars3.githubusercontent.com/u/23281486?s=460&u=937894610c52d62b76c8bbb29682acc03b25b986&v=4" alt="Marton Paulo"/>
				<div>
					<strong>Marton Paulo</strong>
					<span>Esperanto</span>
				</div>
			</header>
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				<br /><br />
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 30,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;