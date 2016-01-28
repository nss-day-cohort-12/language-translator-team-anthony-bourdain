var Translate = (function (oldTranslate) {
		var lexicon = {
			merry: "fröhlich",
			christmas: "weihnachten",
			and: "und",
			happy: "glücklich",
			new: "neu",
			year: "jahr" };
		oldTranslate.german = function (inputText) {
		return lexicon[inputText];
	};
	return oldTranslate;
})(Translate);	