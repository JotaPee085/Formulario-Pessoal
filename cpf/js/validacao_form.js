        $(document).ready(function(){
            $('#cpf').mask('000.000.000-00');
        })
        </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#dataNascimento').mask('00/00/0000');
        })
        </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#idade').mask('000');
        })
        </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#cep').mask('00000-000');
        })
        </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#telefone').mask('(00) 0000-0000');
        })
        </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#celular').mask('(00) 00000-0000');
        })
        </script>
    <script>
        function confirmacao(){
            $.notify({
                message: 'Cadastro enviado com sucesso.'
            } , {
                type: 'success'
            }) ;
            return false
            }  
        </script>