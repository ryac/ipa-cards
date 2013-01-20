<?php

$arr = array(

	/********************************************************
	 * stops..
	 */

	// Bilabial..
	array(	'symbol' => 'p',
			'place' => 'Bilabial',
			'manner' => 'Stops / Plosive',
			'voice' => '-V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/3/35/Voiceless_bilabial_stop.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiceless_bilabial_stop'),

	array(	'symbol' => 'b',
			'place' => 'Bilabial',
			'manner' => 'Stops / Plosive',
			'voice' => '+V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_bilabial_stop.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiced_bilabial_stop'),

	// Alveolar..
	array(	'symbol' => 't',
			'place' => 'Alveolar',
			'manner' => 'Stops / Plosive',
			'voice' => '-V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/e/e0/Voiceless_alveolar_stop.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiceless_alveolar_stop'),

	array(	'symbol' => 'd',
			'place' => 'Alveolar',
			'manner' => 'Stops / Plosive',
			'voice' => '+V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/f/f3/Voiced_alveolar_stop.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiced_alveolar_stop'),

	// Velar..
	array(	'symbol' => 'k',
			'place' => 'Velar',
			'manner' => 'Stops / Plosive',
			'voice' => '-V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiceless_velar_stop'),

	array(	'symbol' => 'g',
			'place' => 'Velar',
			'manner' => 'Stops / Plosive',
			'voice' => '+V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_velar_stop.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiced_velar_stop'),

	/********************************************************
	 * frictives..
	 */



	/********************************************************
	 * affricates..
	 */
	array(	'symbol' => 'tʃ',
			'place' => 'Palatal',
			'manner' => 'Affricate',
			'voice' => '-V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiceless_palato-alveolar_affricate'),

	array(	'symbol' => 'dʒ',
			'place' => 'Palatal',
			'manner' => 'Affricate',
			'voice' => '+V',
			'audio' => 'http://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg',
			'more' => 'http://en.wikipedia.org/wiki/Voiced_palato-alveolar_affricate'),

	);

echo (json_encode($arr));