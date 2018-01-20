Automata theory is the study of abstract machines and automata, as well as the computational problems that can be solved using them. It is a theory in theoretical computer science and discrete mathematics (a subject of study in both mathematics and computer science). The word automata (the plural of automaton) comes from the Greek word αὐτόματα, which means "self-acting".

The figure at right illustrates a finite-state machine, which belongs to a well-known type of automaton. This automaton consists of states (represented in the figure by circles) and transitions (represented by arrows). As the automaton sees a symbol of input, it makes a transition (or jump) to another state, according to its transition function, which takes the current state and the recent symbol as its inputs.

Automata theory is closely related to formal language theory. An automaton is a finite representation of a formal language that may be an infinite set. Automata are often classified by the class of formal languages they can recognize, typically illustrated by the Chomsky hierarchy, which describes the relations between various languages and kinds of formalized logic.

Automata play a major role in theory of computation, compiler construction, artificial intelligence, parsing and formal verification.

Contents  [hide] 
1	Automata
1.1	Very informal description
1.2	Informal description
1.3	Formal definition
1.3.1	definition of finite state automata
2	Variant definitions of automata
3	Classes of automata
3.1	Discrete, continuous, and hybrid automata
4	Hierarchy in terms of powers
5	Applications
6	Automata simulators
7	Connection to category theory
8	See also
9	References
10	Further reading
11	External links
Automata[edit]
Following is an introductory definition of one type of automaton, which attempts to help one grasp the essential concepts involved in automata theory/theories.

Very informal description[edit]
An automaton is a construct made of states designed to determine if the input should be accepted or rejected. It looks a lot like a basic board game where each space on the board represents a state. Each state has information about what to do when an input is received by the machine (again, rather like what to do when you land on the Jail spot in a popular board game). As the machine receives a new input, it looks at the state and picks a new spot based on the information on what to do when it receives that input at that state. When there are no more inputs, the automaton stops and the space it is on when it completes determines whether the automaton accepts or rejects that particular set of inputs.

Informal description[edit]
An automaton runs when it is given some sequence of inputs in discrete (individual) time steps or steps. An automaton processes one input picked from a set of symbols or letters, which is called an alphabet. The symbols received by the automaton as input at any step are a finite sequence of symbols called words. An automaton has a finite set of states. At each moment during a run of the automaton, the automaton is in one of its states. When the automaton receives new input it moves to another state (or transitions) based on a function that takes the current state and symbol as parameters. This function is called the transition function. The automaton reads the symbols of the input word one after another and transitions from state to state according to the transition function until the word is read completely. Once the input word has been read, the automaton is said to have stopped. The state at which the automaton stops is called the final state. Depending on the final state, it's said that the automaton either accepts or rejects an input word. There is a subset of states of the automaton, which is defined as the set of accepting states. If the final state is an accepting state, then the automaton accepts the word. Otherwise, the word is rejected. The set of all the words accepted by an automaton is called the "language of that automaton". Any subset of the language of an automaton is a language recognized by that automaton.

In short, an automaton is a mathematical object that takes a word as input and decides whether to accept it or reject it. Since all computational problems are reducible into the accept/reject question on inputs, (all problem instances can be represented in a finite length of symbols)[citation needed], automata theory plays a crucial role in computational theory. Automata is related to Maths and it is the upper stage of discrete mathematics structure.

Formal definition[edit]
Automaton
definition of finite state automata[edit]
A deterministic finite automaton is represented formally by a 5-tuple <Q, Σ, δ,q0,F>, where:
Q is a finite set of states.
Σ is a finite set of symbols, called the alphabet of the automaton.