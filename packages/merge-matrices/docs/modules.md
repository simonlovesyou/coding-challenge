[merge-matrices](README.md) / Exports

# merge-matrices

## Table of contents

### Functions

- [default](modules.md#default)

## Functions

### default

▸ `Const` **default**<`TValueA`, `TValueB`, `TMergeFunction`\>(`mergeFunction`, `matrixA`, `matrixB`): `Matrix`<`ReturnType`<`TMergeFunction`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValueA` | `TValueA` |
| `TValueB` | `TValueB` |
| `TMergeFunction` | extends `MatrixMergeFunction`<`TValueA`, `TValueB`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mergeFunction` | `TMergeFunction` |
| `matrixA` | `Matrix`<`TValueA`\> |
| `matrixB` | `Matrix`<`TValueB`\> |

#### Returns

`Matrix`<`ReturnType`<`TMergeFunction`\>\>

#### Defined in

[index.ts:10](https://github.com/simonlovesyou/coding-challenge/blob/0e627e7/packages/merge-matrices/src/index.ts#L10)
