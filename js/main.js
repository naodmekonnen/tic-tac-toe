


    function generateElements(parentEl, tag, text, className, idName, cellIndexName, styleName) {

        let element = document.generateElements(tag)                     
        element.innerText = text                                    
        if (className) {                                             
            element.setAttribute('class', className);                
        }
    
        if (idName) {                                                
            element.setAttribute('id', idName);                      
        }
    
        if (cellIndexName) {
            element.setAttribute('cellIndex', cellIndexName);
        }
    
        if (styleName) {
            element.setAttribute('style', styleName);
        }
    
    
        parentEl.appendChild(element)                               
    }
    
    const mainContainer = document.getElementById('main')            
    
    
    function setBoard() {
    
        generateElements(mainContainer, 'h1', 'Tic Tac Toe', '', '', '', '',);
        generateElements(mainContainer, 'div', '', 'card', 'mainCard', '', '',);
        generateElements(mainCard, 'div', '', 'row', 'rowOne', '', 'height: 147px',);
        generateElements(rowOne, 'div', '', 'col', 'columnOneA', '', '',);
        generateElements(columnOneA, 'div', '', 'cell', '', '0', 'height: 120px',);
        generateElements(rowOne, 'div', '', 'col', 'columnOneB', '', '',);
        generateElements(columnOneB, 'div', '', 'cell', '', '1', 'height: 120px',);
        generateElements(rowOne, 'div', '', 'col', 'columnOneC', '', '',);
        generateElements(columnOneC, 'div', '', 'cell', '', '2', 'height: 120px',);
    
        generateElements(mainCard, 'div', '', 'row', 'rowTwo', '', 'height: 147px',);
        generateElements(rowTwo, 'div', '', 'col', 'columnTwoA', '', '',);
        generateElements(columnTwoA, 'div', '', 'cell', '', '3', 'height: 120px',);
        generateElements(rowTwo, 'div', '', 'col', 'columnTwoB', '', '',);
        generateElements(columnTwoB, 'div', '', 'cell', '', '4', 'height: 120px',);
        generateElements(rowTwo, 'div', '', 'col', 'columnTwoC', '', '',);
        generateElements(columnTwoC, 'div', '', 'cell', '', '5', 'height: 120px',);
    
        generateElements(mainCard, 'div', '', 'row', 'rowThree', '', 'height: 147px',);
        generateElements(rowThree, 'div', '', 'col', 'columnThreeA', '', '',);
        generateElements(columnThreeA, 'div', '', 'cell', '', '6', 'height: 120px',);
        generateElements(rowThree, 'div', '', 'col', 'columnThreeB', '', '',);
        generateElements(columnThreeB, 'div', '', 'cell', '', '7', 'height: 120px',);
        generateElements(rowThree, 'div', '', 'col', 'columnThreeC', '', '',);
        generateElements(columnThreeC, 'div', '', 'cell', '', '8', 'height: 120px',);
    
        generateElements(mainContainer, 'h2', '', '', 'statusText', '', '',);
        generateElements(mainContainer, 'button', 'Restart', 'btn btn-outline-info btn-lg', 'restartBtn', '', '',);
    }
    setBoard();
    