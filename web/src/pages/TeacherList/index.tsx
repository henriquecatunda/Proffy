import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/iInput';
import Select from '../../components/Select';



function TeacherList(){

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sâo os Proffys disponiveis">

                <form id="search-teachers">
                  <Select
                     name="subject"
                      label="matéria"
                      options={[
                          {value: 'Ciência', label:'Ciência'},
                          {value: 'Biologia', label:'Biologia'},
                          {value: 'Geografia', label:'Geográfia'},
                          {value: 'Artes', label:'Artes'},
                          {value: 'Historia', label:'Historia'},
                          {value: 'Matematica', label:'Matematica'},
                          {value: 'Quimica', label:'Quimica'},
                          {value: 'Fisica', label:'Fisica'},
                      ]}
                      />

                    <Select
                     name="weey-dey"
                      label="Dia da semana"
                      options={[
                          {value: '0', label:'Domingo'},
                          {value: '1', label:'Segunda-feira'},
                          {value: '2', label:'Terça-feira'},
                          {value: '3', label:'Quarta-feira'},
                          {value: '4', label:'Quinta-feira'},
                          {value: '5', label:'Sexta-feira'},
                          {value: '6', label:'Sábado'},
                      ]}
                      />

                    <Input  type="time" name="time" label="Hora" />
                </form>

            </PageHeader>

            <main>
                 < TeacherItem/>
                 < TeacherItem/>
                 < TeacherItem/>
            </main>
            
        </div>
    )

}

export default TeacherList;