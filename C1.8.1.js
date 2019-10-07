// Написать метод jQuery.prototype.html(), который возвращает или изменяет 
// html-содержимое выбранных элементов.

jQuery.prototype.html = function(html_content){
	this.each(element => element.innerHTML = html_content);
  	return this;
}
