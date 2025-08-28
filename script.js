async function runner() {
    const terminal = document.getElementById('terminal');
    let a = 1;
    let m = 0;
    let h = false;
    
    function addLine(text) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = text;
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
        return line;
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    addLine('[!] You were born.');
    await sleep(1000);
    
    while (h !== true) {
        addLine('\n[!] New Year!')
        await sleep(1000);
        
        addLine(`[*] Your age: ${a}`);
        await sleep(1000);
        
        addLine(`[$] Your money: $${m}`);
        await sleep(1000);
        
        addLine(`[?] Are you happy?`);
        await sleep(1000);
        
        if (m >= 1037500) {
            addLine('[?] -> Yes.');
            await sleep(1000);
            
            addLine(`[!] Your age has reached ${a}!`)
            await sleep(1000);
            
            addLine('[#] ...');
            await sleep(1000);
            
            addLine('[!] You are dead.')
            await sleep(1000);
            
            addLine('[#] This is the end of your story.')
            addLine('');
            await sleep(1000);
            
            break;
        }
        
        else {
            addLine(`[?] -> No.`);
            await sleep(1000);
        
            if (a < 18) { 
                addLine(`[!] You're too young to work.`);
                await sleep(1000);
            
                addLine('[~] Waiting...');
                a += 1;
                await sleep(1000);
            }
            
            else {
                addLine('[~] Working...');
                await sleep(1000);
                
                addLine(`[!] You have received $12,500!`);
                m += 12500;
                a += 1;
                await sleep(1000);
            }
        }
        
        addLine('');
        await sleep(500);
    }
}

window.addEventListener('load', runTerminalSimulation);
