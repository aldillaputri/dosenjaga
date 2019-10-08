<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-expansion-panel focusable>
          <v-expansion-panel-content
            v-for="(item, questionIndex) in quiz.questions"
            :key="questionIndex"
            focusable
          >
            <div slot="header">{{ item.question }}</div>
            <v-card class="grey lighten-3">
              <v-container>
                <v-layout wrap>
                  <v-flex xs10>
                    <v-text-field
                      label="Question"
                      :value="item.question"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      type="number"
                      label="Points"
                      :value="item.points"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-container>
                  <v-layout
                    v-for="(answer, answerIndex) in item.answers"
                    :key="answerIndex"
                    wrap
                  >
                    <v-flex xs10>
                      <v-text-field
                        label="Answer"
                        :value="answer.answer"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn fab dark small color="red">
                        <v-icon>remove</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-layout class="pl-2">
                  <v-btn
                    v-if="item.answers.length < 5"
                    class="mt-4"
                    color="primary"
                    >Add Answer
                  </v-btn>
                  <v-btn class="mt-4" color="red" dark>Remove Question </v-btn>
                </v-layout>
              </v-container>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
