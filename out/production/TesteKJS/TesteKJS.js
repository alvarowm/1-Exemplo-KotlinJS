if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'TesteKJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TesteKJS'.");
}
var TesteKJS = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Teste() {
  }
  Teste.prototype.seEstaVivo_bm4lxs$ = function (url, numeroTentativas) {
    var verbo = 'GET';
    var x = numeroTentativas;
    while (x > 0) {
      if (this.requisitar_0(verbo, url))
        println('Ativo');
      else
        println('Inativo');
      x = x - 1 | 0;
    }
  };
  Teste.prototype.requisitar_0 = function (verbo, url) {
    var req = new XMLHttpRequest();
    req.open(verbo, url, false);
    req.send(null);
    return !equals(req.responseText, '');
  };
  Teste.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Teste',
    interfaces: []
  };
  _.Teste = Teste;
  Kotlin.defineModule('TesteKJS', _);
  return _;
}(typeof TesteKJS === 'undefined' ? {} : TesteKJS, kotlin);
