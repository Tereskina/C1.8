// Написать метод jQuery.prototype.text(), который возвращает или изменяет 
// текстовое содержимое выбранных элементов.

jQuery.prototype.text = function(text){
	this.each(element => element.textContent = text);
	return this;
}
