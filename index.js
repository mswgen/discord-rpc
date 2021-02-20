window.addEventListener('load', () => {
    console.log('\x1b[37m\x1b[31m%s\x1b[0m\n\x1b[37m\x1b[31m%s\x1b[0m\n\x1b[37m\x1b[31m%s\x1b[0m\n\x1b[37m\x1b[31m%s\x1b[0m\n\x1b[37m\x1b[31m%s\x1b[0m\n\x1b[37m\x1b[34m%s\x1b[33m%s\x1b[32m%s\x1b[0m\n\x1b[37m\x1b[34m%s\x1b[33m%s\x1b[32m%s\x1b[0m\n\x1b[37m\x1b[34m%s\x1b[33m%s\x1b[32m%s\x1b[0m\n\x1b[37m\x1b[34m%s\x1b[33m%s\x1b[32m%s\x1b[0m\n\x1b[37m\x1b[34m%s\x1b[33m%s\x1b[32m%s\x1b[0m\n\x1b[37m\x1b[30m%s\x1b[0m\n\x1b[37m\x1b[30m%s\x1b[0m\n\x1b[37m\x1b[30m%s\x1b[0m\n\x1b[37m\x1b[30m%s\x1b[0m\n\x1b[37m\x1b[30m%s\x1b[0m', '            intintintint', '            intintintint', '            intintintint', '            intintintint', '            intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', 'intintintint', '            intintintint', '            intintintint', '            intintintint', '            intintintint', '            intintintint');
    const RPC = require('discord-rpc');
    const client = new RPC.Client({ transport: 'ipc' });
    document.querySelector('#connect').addEventListener('click', () => {
        if (document.querySelector('#clientId').value == '') return;
        RPC.register(document.querySelector('#clientId').value);
        client.once('ready', async () => {
            document.querySelector('#timestamp').addEventListener('change', () => {
                document.querySelector('#timestamp-svg').setAttribute('style', 'left: -3px;');
                document.querySelector('#timestamp-svg rect').setAttribute('x', '4');
                document.querySelector('#timestamp-svg rect').setAttribute('y', '0');
                document.querySelector('#timestamp-svg rect').setAttribute('width', '20');
                document.querySelector('#timestamp-svg rect').setAttribute('height', '20');
                if (document.querySelector('#timestamp').checked) {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(67, 181, 129);');
                    document.querySelector('#timestamp-svg').setAttribute('style', 'left: 12px;');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z');
                } else {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(114, 118, 125);');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z');
                }
            });
            document.querySelector('#timestamp').addEventListener('mousedown', () => {
                document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(81, 162, 128);');
                document.querySelector('#timestamp-svg').setAttribute('style', 'left: 8px;');
                document.querySelector('#timestamp-svg rect').setAttribute('x', '0');
                document.querySelector('#timestamp-svg rect').setAttribute('y', '1');
                document.querySelector('#timestamp-svg rect').setAttribute('width', '28');
                document.querySelector('#timestamp-svg rect').setAttribute('height', '18');
                document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(81, 162, 128, 1)');
                document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z');
                document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(81, 162, 128, 1)');
                document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z');
            });
            document.querySelector('#timestamp').addEventListener('mouseup', () => {
                document.querySelector('#timestamp-svg').setAttribute('style', 'left: -3px;');
                document.querySelector('#timestamp-svg rect').setAttribute('x', '4');
                document.querySelector('#timestamp-svg rect').setAttribute('y', '0');
                document.querySelector('#timestamp-svg rect').setAttribute('width', '20');
                document.querySelector('#timestamp-svg rect').setAttribute('height', '20');
                if (document.querySelector('#timestamp').checked) {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(67, 181, 129);');
                    document.querySelector('#timestamp-svg').setAttribute('style', 'left: 12px;');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z');
                } else {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(114, 118, 125);');
                    document.querySelector('#timestamp-svg').setAttribute('style', 'left: -3px;');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z');
                }
            });
            document.querySelector('#timestamp').addEventListener('mouseout', () => {
                document.querySelector('#timestamp-svg').setAttribute('style', 'left: -3px;');
                document.querySelector('#timestamp-svg rect').setAttribute('x', '4');
                document.querySelector('#timestamp-svg rect').setAttribute('y', '0');
                document.querySelector('#timestamp-svg rect').setAttribute('width', '20');
                document.querySelector('#timestamp-svg rect').setAttribute('height', '20');
                if (document.querySelector('#timestamp').checked) {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(67, 181, 129);');
                    document.querySelector('#timestamp-svg').setAttribute('style', 'left: 12px;');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(67, 181, 129, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z');
                } else {
                    document.querySelector('#timestamp-container').setAttribute('style', 'background-color: rgb(114, 118, 125);');
                    document.querySelector('#timestamp-svg').setAttribute('style', 'left: -3px;');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[0].setAttribute('d', 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('fill', 'rgba(114, 118, 125, 1)');
                    document.querySelectorAll('#timestamp-svg svg path')[1].setAttribute('d', 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z');
                }
            });
            document.querySelector('#login').style.display = 'none';
            document.querySelector('#main').style.display = 'block';
            document.querySelector('#addBtn').addEventListener('click', () => {
                let btnElement = document.createElement('div');
                btnElement.setAttribute('class', 'btnElement')
                btnElement.setAttribute('style', 'border: 1px solid black; border-radius: 3px; margin-left: auto; margin-right: auto;')
                btnElement.innerHTML = `<div class="description">버튼 텍스트</div><input type="text"><div class="description">버튼 링크</div><input type="text"><button onclick="this.parentElement.remove();" style="display: block; margin-left: auto; margin-right: auto;">버튼 삭제하기</button>`;
                document.querySelector('#btns').appendChild(btnElement);
            });
            document.querySelector('#subm').addEventListener('click', () => {
                if (document.querySelector('#state').value == '') return alert('state 값을 입력해주세요');
                if (document.querySelector('#details').value == '') return alert('details 값을 입력해주세요');
                if (document.querySelector('#state').value.length < 2) return alert('state 값은 2자리 이상이어야 해요');
                if (document.querySelector('#partyMax').value && parseInt(document.querySelector('#partyMax').value) < 1) return alert('전체 파티 인원은 1 이상이어야 해요');
                if (document.querySelector('#partySize').value && parseInt(document.querySelector('#partySize').value) < 1) return alert('현재 파티 인원은 1 이상이어야 해요');
                if (document.querySelector('#joinSecret').value && document.querySelector('#joinSecret').value.length < 2) return alert('참가 비밀 값은 2자리 이상이어야 해요');
                for (let btn of Array.from(document.querySelectorAll('.btnElement'))) {
                    if (btn.children[1].value == '') return alert('버튼 텍스트를 입력해주세요');
                    if (btn.children[3].value == '') return alert('버튼 URL을 입력해주세요');
                    if (!new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(btn.children[3].value)) return alert('정확한 URL을 입력해주세요');
                }
                if (Array.from(document.querySelectorAll('.btnElement'))[0] && document.querySelector('#joinSecret').value) return alert('참가 버튼이랑 커스텀 버튼을 동시에 사용할 수 없어요');
                if (document.querySelector('.btnElement')) {
                    client.setActivity({
                        state: document.querySelector('#state').value,
                        details: document.querySelector('#details').value,
                        startTimestamp: document.querySelector('#timestamp').checked ? new Date() : undefined,
                        largeImageKey: document.querySelector('#largeImageKey').value,
                        largeImageText: document.querySelector('#largeImageText').value,
                        smallImageKey: document.querySelector('#smallImageKey').value,
                        smallImageText: document.querySelector('#smallImageText').value,
                        partyMax: parseInt(document.querySelector('#partyMax').value),
                        partySize: parseInt(document.querySelector('#partySize').value),
                        joinSecret: document.querySelector('#joinSecret').value,
                        buttons: Array.from(document.querySelectorAll('.btnElement')).map(x => {
                            return {
                                label: x.children[1].value,
                                url: x.children[3].value
                            }
                        })
                    });
                } else {
                    client.setActivity({
                        state: document.querySelector('#state').value,
                        details: document.querySelector('#details').value,
                        startTimestamp: document.querySelector('#timestamp').checked ? new Date() : undefined,
                        largeImageKey: document.querySelector('#largeImageKey').value,
                        largeImageText: document.querySelector('#largeImageText').value,
                        smallImageKey: document.querySelector('#smallImageKey').value,
                        smallImageText: document.querySelector('#smallImageText').value,
                        partyMax: parseInt(document.querySelector('#partyMax').value),
                        partySize: parseInt(document.querySelector('#partySize').value),
                        joinSecret: document.querySelector('#joinSecret').value
                    });
                }
            });
        });
        client.login({ clientId: document.querySelector('#clientId').value }).catch(e => alert(`Error: ${e}`));
    });
});