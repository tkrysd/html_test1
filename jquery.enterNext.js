/********************************************************************
  filename: jquery.enterNext.js
  usage: call bellow...
   $('form').enterNext();
********************************************************************/
(function($,undefined)
 {
   $.enterNext =
     {
       config:
         {
           selectors: [
             'input[type="text"]',
             'input[type="password"]',
             'input[type="email"]',
             'input[type="number"]',
             'select',
             'textarea'
           ]
         }
     };

   var enterNextInternal = function(setting)
   {
     var selectors = setting.selectors.join(',');
     var $controls = $(selectors,this);
     var lastIndex = $controls.length - 1;
     var onKey =  function(ev) 
     {
       if(this.tagName.match(/input/i) && ev.keyCode == 13)
       {
         var currentIndex = $controls.index(this);
         var nextIndex = currentIndex + 1;
         if(currentIndex == lastIndex)
           nextIndex = 0;

         var nextObject = $controls.get(nextIndex);
         nextObject.focus();
       }
     };
     $(this).on('keydown',selectors,onKey);
     // 修正: onkeydown へ変更。onkeyupだと validityチェックでフォーカスが移動しなくなった。。。なんで？よくわからん。
   };
   
   $.fn.enterNext = function(options)
   {
     return this.each( function() { enterNextInternal.call(this,$.extend(true,{},$.enterNext.config,options)); });
   };
   
})(jQuery);