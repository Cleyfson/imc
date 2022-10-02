import View from './View';

class PersonView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nome</th> <th>Idade</th> <th>Peso</th> <th>Altura</th> <th>IMC</th> <th>Situação</th>
                  </tr>
              </thead>
              <tbody>
              ${model._personList
                .map((person, index) => {
                  return `
                  <tr>
                    <td>
                        ${index}
                    </td>
                    <td>${person._name}</td>
                    <td>${person._age}</td>
                    <td>${person._weight}</td>
                    <td>${person._height}</td>
                    <td>${person._imc}</td>
                    <td>${person._imcLevel}</td>
                  </tr>
                `;
                })
                .join('')}
              </tbody>
          </table>
      `;
  }
}

export default PersonView;
