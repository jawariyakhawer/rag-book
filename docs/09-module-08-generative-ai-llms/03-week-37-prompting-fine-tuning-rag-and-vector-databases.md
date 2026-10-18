---
title: "Week 37: Prompting, Fine-Tuning, RAG and Vector Databases"
sidebar_label: "Week 37: Prompting, Fine-Tuning, RAG and Vector Databases"
---

# Week 37: Prompting, Fine-Tuning, RAG and Vector Databases

## Prompt Engineering

Craft clear, specific prompts (with context, examples and format instructions) to guide LLM responses.

:::info Roman Urdu
Saaf aur wazeh prompts likhna (context, examples aur format ke sath) taake LLM behtar jawab de.
:::

## Fine-Tuning (LoRA/QLoRA)

Adapt pre-trained models to specific tasks with lightweight fine-tuning techniques.

:::info Roman Urdu
Halki fine-tuning techniques se pehle se trained models ko khaas kaam ke liye dhalna.
:::

## RAG Systems

Retrieval-Augmented Generation: find the most relevant pieces of your documents, then give them to the LLM so its answers are grounded in your content.

:::info Roman Urdu
Retrieval-Augmented Generation: pehle apne documents mein se sab se munasib hissay dhoondna, phir LLM ko dena taake jawab aapke content par mabni ho.
:::

```python
# RAG in 4 steps
# 1. Split documents into chunks
# 2. Turn each chunk into an embedding (vector) and store it
# 3. For a question: embed it and fetch the closest chunks
# 4. Send question + chunks to the LLM to write the answer
```

## Vector Databases (FAISS/Pinecone)

Store and search embeddings efficiently for semantic retrieval. This book uses Qdrant, another popular vector database.

:::info Roman Urdu
Embeddings ko store aur search karna taake matlab ke lihaz se jawab milein. Ye book Qdrant istemal karti hai, jo aik aur mashhoor vector database hai.
:::

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
