const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {

    adicao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'Erro na adicao - primeiro numero invalido';
        }
        else if(validateNum2 !== undefined){
            return 'Erro na adicao - segundo numero invalido';
        }

        let result = num1 + num2;
        return result;
    },

    subtracao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'Erro na subtracao - primeiro numero invalido';
        }
        else if(validateNum2 !== undefined){
            return 'Erro na subtracao - segundo numero invalido';
        }

        let result = num1 - num2;
        return result;
    },

    multiplicacao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'Erro na multiplicacao - primeiro numero invalido';
        }
        else if(validateNum2 !== undefined){
            return 'Erro na multiplicacao - segundo numero invalido';
        }
        
        let result = num1 * num2;
        return result;
    },

    divisao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'Erro na divisao - primeiro numero invalido';
        }
        else if(validateNum2 !== undefined){
            return 'Erro na divisao - segundo numero invalido';
        }
        
        let result = num1 / num2;
        return result;
    },

    exponenciacao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'Erro na exponenciacao - primeiro numero invalido';
        }
        else if(validateNum2 !== undefined){
            return 'Erro na exponenciacao - segundo numero invalido';
        }
        
        let result = num1 ** num2;
        return result;
    },
    
};

module.exports = Calculadora;