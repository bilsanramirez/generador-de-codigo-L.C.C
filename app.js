var app = new Vue({
    el: '#app',
    data: {
        codigo: '',
        cantidad: 0,
        codigos: []
    },

    methods: {
        agregarCodigo: function(){
            for( i=0; i < this.cantidad; i++ ){
                this.codigos.push( this.codigo );
            }         
        },

        borrar: function(){
            this.codigos = [];
            this.cantidad = 0;
            this.codigo = '';
        },

        imprimir: function(){
            window.print();
        }
    }

  })