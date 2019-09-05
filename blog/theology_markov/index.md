---
layout: post
title:  "Markov Versus Theology"
date:   2019-07-19 11:08:20 -0400

---

"Assuming all things independent.'' A statement any mathematician would be reminded of in their introductory probability and statistics class.  At first glance,  this statement would usher in a sigh of relief to any student knowing that they would not have to deal with conditional probabilities.  But hidden behind this idea of independence lies a philosophical debate that would be won with a mathematical argument.  This reasoning led to the discovery of what contemporaries now know as the study of Markov Chains.

There is a long thread that is sewn through the history of significant figures that influenced the development of probability theory.  This short paper will preface by summarizing Bernoulli and his proof of the weak law of large numbers.  Informally, the law demonstrates that if a fair coin is flipped an infinite amount of times, the probability that the event of “heads” occurring will converge to 50%.  This idea does not mean that if a coin is flipped 10 times, the occurrence of heads is 5.  In an experiment, the result may be 8 heads and 2 tails.  The prior example applies to trials of 100, 1000, 10000, and on. The conclusion - the convergence upon 50% - occurs only after an extremely large number of trials.  The key assumption is that each trial is independent of one another.  The next logical question that follows from this assumption is, does the phenomena of convergence occur if events are dependent? In other words, does the weak law of large numbers apply if each trial is influenced by prior events.   This is the focus of what is to come.

A man by the name of Andrei Andreevich Markov would provide us with an answer to the above question. But his motivations in doing so might not be what one may expect.  At the turn of the 20th century, there were mathematicians promulgating the ideas of a relationship between religious doctrine and mathematics.  More specifically, the religious debate between free will and determinism. Pavel Alekseevich Nekrasov – a theologian turned mathematician – published a paper in 1902 that conjectured independence of events is a necessary condition for the law of large numbers(Hayes, 2013).  His summarized argument, states,


>Voluntary acts – expressions of free will – are like the independent events of probability theory, with no causal links between them.  The law of large numbers applies only to such events...Therefore the underlying acts of individuals must be independent and voluntary (Hayes, 2013).


Markov, an atheist, would not allow this religious agenda to be placed upon the field of mathematics.  Markov, known to be an abrasive character, attacked Nekrasov by labelling his writing as an "abuse of mathematics.(Basharin and Langeville and Naumaov, 2004).''  Using mathematical reason Markov would prove that it is not necessary for events to be independent using a counterexample.  His famous experiment was the analysis of the lexicon of a Russian poem called Onegin.  In the experiment, Markov took 20000 letters from the poem and divided them into 200 samples of 100 letters.  He calculated the arithmetic means of occurrence of both vowels and consonant. In his next step he sampled letter pairs – that is vowel, vowel or consonant, consents or vowel, consonant and vice versa.  In the initial experiment, assuming all things independent, the initial probability of a vowel occurring was about $$0.43$$ which means the probability of a vowel pair occurring should have been about $$(.43)^2$$.  But from his own sample, given the assumption that the the occurrence of letters are independent, the actual occurrence was almost less the 3 times the probability of $$(.43)^2$$. Demonstrating there is evidence that the probability of the occurrence of letters humans produce in order to compose language is not independent.   This theological quarrel would extend the laws of probability past independent events and kick start a field of research in Markov Chains that still greatly effect us 100 years later.

### Population Growth Applications

There are many applications in the study of Markov Chains.  These examples include far ranging topics from nuclear physics to artificial intelligence.  The example and analysis in this paper will focus on the topic of population growth.

A Markov chain can be represented using square matrices of linear algebra.

$$
T = \left[ \begin{array}{rr} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right]
$$

T is called the transition matrix where each element represents the transition probability from one state to the next.  For example, in Markov's experiment there were two states; either being in the state of a vowel or the state of a consonant. This system would be represented by a $$ 2\times 2$$ matrix where $$a_{11}$$ represents the transition from vowel to vowel, $$ a_{12} $$ represents a transition from vowel to consonant, and so on. To generalize, each $$ a_{ij} $$ represents the transition probability from state i to state j such $$ 0 < a_{ij} < 1 $$.

This method can be applied to the Leslie model of population growth.  A Leslie matrix can be represented as,

$$
T = \left[ \begin{array}{rrr} a_{x} & a_{y} & a_{z} \\ 1 - a_{x} & 0 & 0 \\ 0 & 1-a_{y} & 1-a_{z}\end{array} \right]
$$

In the above matrix, x, y and z represent different age groups of a population - mice for example - where x is the group of baby mice, y is the group middle age mice and z is the group of old age mice. $$ a_x, a_y $$ and $$a_z$$ are the death rates and the complements are the birth rates.  There is also a population vector which is represented as,

$$
v(k) = \left[ \begin{array}{r} x(k) \\ y(k)\\ z(k) \end{array} \right]
$$

$$x(k), y(k)$$ and $$z(k)$$ are functions of the total population of each age group at a given states $$k$$ where $$k$$ can be arbitrarily chosen.  In this case, $$k = 1\: year,2\:years,3\:years,...$$ The model then would be represented as the linear transformation,

$$
v(k+1) = T \cdot v(k)
$$

The death and birth of the population from $$v(k)$$ to $$v(k+1)$$ depends upon the initial state $$ v(k)$$.  But according to Markov and his work on the inclusion of dependent events in the law of large numbers, the population vector v(k) will eventually converge to something called the steady state vector. But this would happen after numerous state transitions.  Given enough transitions into the future states, the model does not depend on the initial state. For example, let's say the model converges after 25 years.  To find the steady state vector, solve for the eigenvalues of matrix $$T$$ and then diagonalize to solve for the eigenvalues of $$T^{25}$$.  This will give us the corresponding eigenvector that represents the proportions of our different groups of population in our system.
