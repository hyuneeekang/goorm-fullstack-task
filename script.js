/*
cell => 객체 형식으로 각각의 자리에 대한 정보 가짐 => 클래스로 정의
    객체 속성: data(셀 입력 값), ROW, COL 등
spread sheet => cell 배열
*/

const spreadsheet = [];
const ROWS = 10;
const COLS = 10;
const spreadSheetContainer = document.querySelector('#spreadsheet-container');
class Cell {
    constructor(isHeader, disabled, data, row, column, active = false){
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.active = active;
    }
}

// spread sheet 및 cell data 만들기
initSpreadsheet();
function initSpreadsheet(){
    for(i=0 ; i<ROWS ; i++){
        const spreadsheetRow = [];
        for(j=0 ; j<COLS ; j++){
            const newCell = new Cell(false, false, '', ROWS, COLS, false); 
            newCell.row = i;
            newCell.column = j;

            // 첫번째 column, row에 숫자 넣기 
            // Header 만들기 & Header disabled
            if(i === 0 ){
                newCell.data = j;
                newCell.isHeader = true;
                newCell.disabled = true;
            }
            if(j === 0){
                newCell.data = i;
                newCell.isHeader = true;
                newCell.disabled = true;
            }            
            if(i === 0 && j === 0){
                newCell.data = '';
            }

            spreadsheetRow.push(newCell);

        }
        spreadsheet.push(spreadsheetRow);
    }
    console.log(spreadsheet);
}


// cell 요소 만들기
function createCellEl(cell){
    const CellEl = document.createElement('input');
    CellEl.className = 'cell';
    CellEl.id = `cell_${cell.row}-${cell.column}`;
    CellEl.value = cell.data;
    CellEl.disabled = cell.disabled;

    // Header 스타일링하기
    if(cell.isHeader){
        CellEl.classList.add('header');
    }

    CellEl.onclick = () => handleCellClick(cell);
    //셀에 입력할 때 cell.data로 저장하기
    CellEl.onchange = (e) => handleOnChange(e.target.value, cell);
    

    return CellEl;
}

drawSheet();
// cell 렌더링 : 만든 cell 요소를 Html 코드에 넣어 화면에 노출하기
// function drawSheet(){
//     for(i=0 ; i<spreadsheet.length ; i++){
//         for(j=0 ; j< spreadsheet[i].length; j++){
//             const cell = createCellEl(spreadsheet[i][j]);
//             spreadSheetContainer.append(cell);
//         }
//     }
// }

// roW 행 구분하기
// row별 div 만들고 해당하는 cell append
function drawSheet(){
    for(i=0 ; i<spreadsheet.length ; i++){
        const rowEl = document.createElement('div');
        rowEl.className = 'row';
        rowEl.id = `row ${i}`;

        for(j=0 ; j< spreadsheet[i].length; j++){
            const cell = createCellEl(spreadsheet[i][j]);
            rowEl.append(cell);
            cell.isHeader = false;

        }
        spreadSheetContainer.append(rowEl);
    }
}

// 첫번째 column, row에 숫자 넣기 ==> initSpreadsheet()
// Header 만들기 & disabled ==> initSpreadsheet()
// Header 스타일링 ===> createCellEl()
// 특정 셀 클릭하면 해당 셀 정보 콘솔 출력
    // 클릭 이벤트 호출 ===> createCellEl()
// function handleCellClick (cell){
//     console.log('clicked cell:' + cell);
//     console.log(cell);
// }
// 셀 클릭 시 해당 셀의 Header(Row, Col) 객체 데이터 콘솔 출력
function handleCellClick (cell){
    // 이전의 하이라이트 된 부분 지우기 
    clearHeaderActive();

    const headerRow = spreadsheet[cell.row][0];
    const headerColumn = spreadsheet[0][cell.column];

    //row header, column header 요소 가져오기
    const headerRowEl = getElFromRowCol(headerRow.row, 0);
    const headerColumnEl = getElFromRowCol(0, headerColumn.column);

    headerRowEl.classList.add('active');
    headerColumnEl.classList.add('active');

    // 클릭한 셀 위치 보여주기
    const cellStatus = document.querySelector('#cell-status');
    cellStatus.innerText = `${cell.row} - ${cell.column}`;
}

function getElFromRowCol (row, col){
    return document.querySelector(`#cell_${row}-${col}`);
    // const cellList = document.querySelectorAll('input');

    // cellList.forEach( x => {
    //     if(headerCol === 0 ){
    //         if(x.row === headerRow){
    //             return x;
    //         }
    //     }
    //     if(headerRow === 0){
    //         if(x.column === headerCol){
    //             return x;
    //         }
    //     }
    // })
}
function clearHeaderActive () {
    const headers = document.querySelectorAll('.header');
    headers.forEach( x => {
        x.classList.remove('active');
    })
}


function handleOnChange(value, cell) {
    cell.data = value;
}

const exportBtn = document.querySelector('#export-btn');
exportBtn.onclick = function(e) {
    // 엑셀 파일로 만들기 위한 형태(String)으로 변환하기
    let csv = '';
    for (let i=0 ; i<spreadsheet.length ; i++){
        if(i==0) continue; //1행 헤더 부분 제외하기 위함
        csv += spreadsheet[i]
                    .filter(item => !item.isHeader)
                    .map(item => item.data)
                    .join(",") + "\r\n";
    }
    
    // 엑셀 파일 다운로드하기
    const csvObj = new Blob([csv]);
    const csvUrl = URL.createObjectURL(csvObj);
    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = "Spreadsheet File Name.csv"
    a.click();
}
