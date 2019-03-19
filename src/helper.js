export function getYearDiff(year) {
    return new Date().getFullYear() - year;
 }
 
 export function brandCalc( model ) {
     let increment;
 
     switch (model) {
         case 'european':
             increment = 1.30;
             break;
         case 'american':
             increment = 1.15;
             break;
         case 'asiatic':
             increment = 1.05;
             break;
         default:
             break;
     }
 
     return increment;
 }
 export function getPlan( plan ) {
     return (plan === 'basic') ? 1.20 : 1.50;
 }
 export function firstUppercase(text) {
     return text.charAt(0).toUpperCase() + text.slice(1);
 }