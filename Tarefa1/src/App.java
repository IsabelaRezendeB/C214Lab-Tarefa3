public class App {
    public static void main(String[] args) throws Exception {

        Veiculo veiculo = new Veiculo();
        veiculo.setPlaca("VEI1234");
        veiculo.setAno("1990");

        Onibus onibus = new Onibus("ONI1234", 2010, 20);

        Caminhao caminhao = new Caminhao("CAM1234", 2022, 3);

        System.out.println("------ VEICULO  ------");
        veiculo.exibirDados();

        System.out.println("\n------ ONIBUS ------");
        onibus.exibirDados();

        System.out.println("\n------ CAMINHAO ------");
        caminhao.exibirDados();

    }
}
