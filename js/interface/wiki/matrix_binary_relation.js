/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Matrix Binary Relation']=Kx(


detail('矩阵（二元关系）',Table([ZLR('名称 记法 充要条件 性质')],[
	ZLR('相似\nsimilar____A \\sim B____'+khrA(['AP=PB ⇔ P^{-1}AP=B \\\\ 其中P可逆',
		kxA(['相似 ⇔ '+piece(['特征矩阵等价','行列式因子相同','不变因子相同','初等因子相同且特征矩阵的秩相同','转置矩阵相似','逆矩阵相似（均可逆时）']),
		'A与对角阵相似（可对角化） ⇔ '+piece(['A有n个线性无关的特征向量','A的特征值的代数重数等于几何重数','最小多项式没有重根','初等因子都是1次的'])])
		])+'____'+
		kul(['相似 ⇒ '+piece(['等价关系','特征值相同','正定性相同 \\\\ 证明：上推','特征多项式相同','最小多项式相同（反之不成立）','秩相等','迹相等','行列式相等','伴随矩阵相似 \\\\ 证明：等式两边求伴随矩阵']),
			'都可逆，或都不可逆',
			'可逆 ⇔ 逆矩阵相似',
			piece(['A^{-1} \\sim B^{-1}','A^T \\sim B^T','A+A^{-1} \\sim B+B^{-1}','kA \\sim kB','kA+bA^{-1} \\sim kB+bB^{-1}']),
			'伴随矩阵相似 ⇏ 原矩阵相似','举例：','A='+kxf('diag')+'(1,0,0)与B='+kxf('diag')+'(2,0,0),','伴随矩阵都是0,但A和B不相似',
			piece(['A的特征值互异（无重根）','A是对称矩阵'],1)+'⇒ A与对角阵Λ相似（可对角化）',
			'二阶实矩阵满足A^2+E=0 ⇒ A与副对角阵'+kxf('cdiag')+'(-1,1)相似','证明：求出A具体形式，再尝试施行一个相似变换'
		]),'','____'),
	ZLR('正交相似\n________'+khrA(['A = P^TBP\\\\ 其中P是正交矩阵'])+'____例：','','____'),
	ZLR('酉相似\n________A =U^HBU\\\\ 其中U是酉矩阵____例：','','____'),
	
	ZLR('合同\ncongruent____A ≃ B____'+khrA(['A = P^TBP \\\\ 其中P可逆',
		'合同 ⇔ '+piece(['对称矩阵','正负惯性指数相同','正特征值、零特征值、负特征值个数分别相等'])
		])+'____'+
		'合同 ⇒ '+piece(['等价关系','秩相等','可逆 → 逆矩阵合同'])+
		'','','____'),
	ZLR('H合同\n____A ≃ B____A = P^HBP\\\\ 其中P可逆____例：','','____'),


	ZLR('等价\nequivalent____A ≅ B____'+khrA(['A = (∏P_i)B 或 A = B(∏P_i)','A、B可经过一系列初等变换相互转化\\\\ 其中P_i是初等矩阵'])+'____'+
		'等价 ⇒ '+piece(['等价关系','秩相等','可逆 → 逆矩阵等价'])+
		'','','____'),

	ZLR('置换相似\npermutation similar________A = P^TBP\\\\ 其中P是置换矩阵____'+
		'置换相似 ⇒ '+piece(['等价关系'])+
		'','','____'),
	ZLR('置换等价\npermutation equivalent________A = PBQ\\\\ 其中P、Q是置换矩阵____'+
		'置换等价 ⇒ '+piece(['等价关系'])+
		'','','____')


],'wiki').replace(/\n/g,br))



);