document.addEventListener('DOMContentLoaded', function() {
            // ============================================
            // 정규식 패턴 객체
            // ============================================
            const patterns = {
                uid: /^[a-zA-Z0-9_]{6,20}$/,
                upw: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,20}$/,
                unm: /^[a-zA-Z가-힣]{2,50}$/,
                utel: /^010\d{8}$/,
                umail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                ubirth: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
            };

            // ============================================
            // 추가 검증 함수
            // ============================================
            const validators = {
                upw: function(value) {
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
                    return hasUpperCase && hasSpecial;
                },
                umail: function(value) {
                    return (value.match(/@/g) || []).length === 1;
                }
            };

            // ============================================
            // 유효성 검사 함수
            // ============================================
            function validateField(field) {
                const id = field.id;
                const value = field.value;
                const errorMsg = field.nextElementSibling;
                
                if (!patterns[id] || !value) return false;

                const isPatternValid = patterns[id].test(value);
                const isAdditionalValid = !validators[id] || validators[id](value);
                const isValid = isPatternValid && isAdditionalValid;

                if (isValid) {
                    field.classList.add('success');
                    field.classList.remove('error');
                    errorMsg.style.display = 'none';
                } else {
                    field.classList.add('error');
                    field.classList.remove('success');
                    errorMsg.style.display = 'block';
                }

                return isValid;
            }

            // ============================================
            // 이벤트 리스너 등록
            // ============================================
            const inputs = document.querySelectorAll('.selInput');
            
            inputs.forEach(function(input) {
                input.addEventListener('blur', function() {
                    validateField(this);
                });

                input.addEventListener('focus', function() {
                    if (this.classList.contains('error')) {
                        this.classList.remove('error', 'success');
                        this.nextElementSibling.style.display = 'none';
                    }
                });

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const inputsArray = Array.from(inputs);
                        const index = inputsArray.indexOf(this);
                        
                        if (index < inputsArray.length - 1) {
                            inputsArray[index + 1].focus();
                        } else {
                            document.querySelector('button[type="submit"]').click();
                        }
                    }
                });
            });

            // 전화번호 입력 제한
            const telInput = document.getElementById('utel');
            telInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '').substring(0, 11);
            });

            // ============================================
            // 폼 제출 검증
            // ============================================
            const form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const requiredInputs = document.querySelectorAll('.selInput[required]');
                let isValid = true;
                let firstErrorField = null;

                requiredInputs.forEach(function(input) {
                    const value = input.value.trim();
                    const errorMsg = input.nextElementSibling;
                    
                    if (!value) {
                        input.classList.add('error');
                        errorMsg.textContent = '필수 입력 항목입니다.';
                        errorMsg.style.display = 'block';
                        isValid = false;
                        
                        if (!firstErrorField) {
                            firstErrorField = input;
                        }
                        return;
                    }

                    if (!validateField(input)) {
                        isValid = false;
                        if (!firstErrorField) {
                            firstErrorField = input;
                        }
                    }
                });

                if (isValid) {
                    // 유효성 검사 통과 시 폼 제출 (action으로 이동)
                    this.submit();
                } else {
                    alert('입력 정보를 확인해주세요.');
                    if (firstErrorField) {
                        firstErrorField.focus();
                    }
                }
            });
        });