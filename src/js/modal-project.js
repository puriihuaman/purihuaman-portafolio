// Ventana modal
const modalProject = (( d ) => {
	const $form = d.querySelector('.form'),
				$loader = d.querySelector('.form__loader'),
				$modal = d.getElementById('thank');

	$form.addEventListener('submit', ( ev ) => {
		ev.preventDefault();
		$loader.classList.add("form__loader--show");
		fetch('https://formsubmit.co/ajax/purihuamanpurihuamanpedro@gmail.com', {
			method: 'POST',
			body: new FormData( ev.target )
		})
			.then(( res ) => res.ok ? res.json() : Promise.reject( res ))
			.then(( resJson ) => {
				console.log( resJson);
				location.hash = '#thank';
				$form.reset();
			})
			.catch(( error ) => {
				console.log( error );
				let message = error.statusText || 'Ocurrió un error al enviar, intenta nuevamente!.';
				$modal.querySelector('h3').textContent = `Erro ${error.status}: ${message}`;
			})
			.finally(() => {
				$loader.classList.remove('form__loader--show');
				setTimeout(() => {
					location.hash = "#close";
				}, 3000);
			});
	});
})(document);

